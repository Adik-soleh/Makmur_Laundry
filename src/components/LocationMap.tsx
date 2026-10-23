import { useEffect, useRef, useState } from "react";
import type * as Leaflet from "leaflet";
import { business, waLink } from "../data/content";
import { PinIcon } from "./Icons";

type LatLng = { lat: number; lng: number };
type Route = { km: number; minutes: number; byRoad: boolean; path: [number, number][] };
type Status =
  | { kind: "idle" }
  | { kind: "locating" }
  | { kind: "routing" }
  | { kind: "done"; route: Route }
  | { kind: "error"; message: string };

const outlet: LatLng = business.geo;

const toRad = (deg: number) => (deg * Math.PI) / 180;

/** Jarak garis lurus (haversine), cadangan kalau layanan rute tidak menjawab. */
const straightKm = (from: LatLng) => {
  const dLat = toRad(outlet.lat - from.lat);
  const dLng = toRad(outlet.lng - from.lng);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(from.lat)) * Math.cos(toRad(outlet.lat)) * Math.sin(dLng / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

/** Rute jalan dari OSRM (mesin rute OpenStreetMap). Gagal → garis lurus + perkiraan waktu. */
const fetchRoute = async (from: LatLng): Promise<Route> => {
  const url = `https://router.project-osrm.org/route/v1/driving/${from.lng},${from.lat};${outlet.lng},${outlet.lat}?overview=full&geometries=geojson`;
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    const data = await res.json();
    const route = data?.routes?.[0];
    if (!res.ok || !route) throw new Error("no route");
    return {
      km: route.distance / 1000,
      minutes: Math.max(1, Math.round(route.duration / 60)),
      byRoad: true,
      path: route.geometry.coordinates.map(([lng, lat]: [number, number]) => [lat, lng])
    };
  } catch {
    const km = straightKm(from);
    return {
      km,
      // Jalan ±30% lebih panjang dari garis lurus, rata-rata 25 km/jam.
      minutes: Math.max(2, Math.round(((km * 1.3) / 25) * 60)),
      byRoad: false,
      path: [
        [from.lat, from.lng],
        [outlet.lat, outlet.lng]
      ]
    };
  }
};

const formatDistance = (km: number) =>
  km < 1
    ? `${Math.max(50, Math.round((km * 1000) / 50) * 50)} m`
    : `${km.toLocaleString("id-ID", { maximumFractionDigits: 1 })} km`;

const errorMessage = (error: GeolocationPositionError) => {
  if (error.code === error.PERMISSION_DENIED) {
    return "Izin lokasi ditolak. Aktifkan izin lokasi untuk situs ini di pengaturan browser, lalu coba lagi.";
  }
  if (error.code === error.TIMEOUT) return "Lokasi belum ketemu. Pastikan GPS menyala, lalu coba lagi.";
  return "Lokasi tidak bisa dibaca di perangkat ini. Pakai tombol petunjuk arah saja.";
};

const outletPin = `<svg viewBox="0 0 28 36" width="28" height="36" aria-hidden="true"><path d="M14 0C6.3 0 0 6.2 0 13.9 0 24.3 14 36 14 36s14-11.7 14-22.1C28 6.2 21.7 0 14 0Z" fill="#0E5AA7"/><circle cx="14" cy="14" r="5.5" fill="#fff"/></svg>`;

/**
 * Peta OpenStreetMap + cek jarak. Leaflet baru diunduh saat bagian ini hampir
 * terlihat, supaya halaman awal tetap ringan.
 */
const LocationMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<typeof Leaflet | null>(null);
  const mapRef = useRef<Leaflet.Map | null>(null);
  const routeLayerRef = useRef<Leaflet.LayerGroup | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let cancelled = false;

    const init = async () => {
      const [{ default: L }] = await Promise.all([import("leaflet"), import("leaflet/dist/leaflet.css")]);
      if (cancelled || mapRef.current) return;
      const map = L.map(el, {
        center: [outlet.lat, outlet.lng],
        zoom: 16,
        scrollWheelZoom: false,
        // Di HP, geser satu jari tetap untuk scroll halaman; peta pakai tombol zoom.
        dragging: !L.Browser.mobile
      });
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      L.marker([outlet.lat, outlet.lng], {
        icon: L.divIcon({ html: outletPin, className: "", iconSize: [28, 36], iconAnchor: [14, 36] }),
        title: business.name,
        keyboard: false
      })
        .bindTooltip(business.name, { permanent: true, direction: "top", offset: [0, -38], className: "map-label" })
        .addTo(map);
      leafletRef.current = L;
      mapRef.current = map;
      setMapReady(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          void init();
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(el);

    return () => {
      cancelled = true;
      observer.disconnect();
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  const drawRoute = (from: LatLng, route: Route) => {
    const L = leafletRef.current;
    const map = mapRef.current;
    if (!L || !map) return;
    routeLayerRef.current?.remove();
    const line = L.polyline(route.path, {
      color: "#0E5AA7",
      weight: 5,
      opacity: 0.85,
      dashArray: route.byRoad ? undefined : "2 10",
      lineCap: "round"
    });
    const you = L.circleMarker([from.lat, from.lng], {
      radius: 8,
      color: "#fff",
      weight: 3,
      fillColor: "#15803D",
      fillOpacity: 1
    }).bindTooltip("Anda", { permanent: true, direction: "top", offset: [0, -10], className: "map-label" });
    // Label waktu & jarak di tengah rute, seperti di Google Maps.
    const mid = route.path[Math.floor(route.path.length / 2)];
    const badge = L.tooltip({ permanent: true, direction: "right", offset: [10, 0], className: "map-route-badge" })
      .setLatLng(
        route.byRoad
          ? mid
          : [(route.path[0][0] + outlet.lat) / 2, (route.path[0][1] + outlet.lng) / 2]
      )
      .setContent(`<strong>±${route.minutes} mnt</strong><span>${formatDistance(route.km)}</span>`);
    routeLayerRef.current = L.layerGroup([line, you, badge]).addTo(map);
    map.fitBounds(line.getBounds().extend([from.lat, from.lng]), { padding: [48, 48], maxZoom: 17 });
  };

  const locate = () => {
    if (!("geolocation" in navigator)) {
      setStatus({ kind: "error", message: "Browser ini tidak mendukung cek lokasi." });
      return;
    }
    setStatus({ kind: "locating" });
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const from = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        setStatus({ kind: "routing" });
        const route = await fetchRoute(from);
        drawRoute(from, route);
        setStatus({ kind: "done", route });
      },
      (error) => setStatus({ kind: "error", message: errorMessage(error) }),
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 }
    );
  };

  const busy = status.kind === "locating" || status.kind === "routing";
  const route = status.kind === "done" ? status.route : null;

  return (
    <div className="overflow-hidden rounded-[20px] border border-line bg-white">
      <div className="relative isolate h-[300px] bg-brand-50 sm:h-[340px]">
        <div ref={containerRef} className="absolute inset-0" role="region" aria-label="Peta lokasi Makmur Laundry" />
        {!mapReady && (
          <p className="absolute inset-0 flex items-center justify-center text-sm text-navy-muted">
            Memuat peta…
          </p>
        )}
      </div>

      <div className="p-5 sm:p-6">
        {route ? (
          <>
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-sm text-navy-muted">{route.byRoad ? "Jarak lewat jalan" : "Jarak garis lurus"}</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-brand-700">{formatDistance(route.km)}</dd>
              </div>
              <div>
                <dt className="text-sm text-navy-muted">Waktu tempuh</dt>
                <dd className="text-3xl font-extrabold tracking-tight text-brand-700">±{route.minutes} menit</dd>
              </div>
            </dl>
            <p className="mt-2 text-sm text-navy-muted">
              {route.byRoad
                ? "Perkiraan berkendara tanpa macet."
                : "Rute jalan belum bisa dimuat, jadi ini perkiraan dari garis lurus."}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href={waLink(`Halo, saya mau minta dijemput. Jarak saya sekitar ${formatDistance(route.km)} dari outlet.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-wa py-2.5"
              >
                Minta dijemput
              </a>
              <a href={business.mapsLink} target="_blank" rel="noreferrer" className="btn-outline py-2.5">
                Buka rute di Google Maps
              </a>
            </div>
          </>
        ) : (
          <>
            <p className="flex items-center gap-2 font-bold">
              <PinIcon className="h-5 w-5 text-brand-600" />
              Seberapa jauh dari rumah Anda?
            </p>
            <p className="mt-1 text-sm text-navy-soft">
              Lokasi Anda dipakai untuk menghitung rute lewat layanan peta OpenStreetMap, tidak kami simpan.
            </p>
            <button
              type="button"
              onClick={locate}
              disabled={busy || !mapReady}
              className="btn-primary mt-4 py-2.5 disabled:opacity-70"
            >
              {status.kind === "locating"
                ? "Mencari lokasi…"
                : status.kind === "routing"
                  ? "Menghitung rute…"
                  : "Cek jarak dari lokasi saya"}
            </button>
            {status.kind === "error" && (
              <p role="alert" className="mt-3 text-sm font-medium text-red-700">
                {status.message}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
