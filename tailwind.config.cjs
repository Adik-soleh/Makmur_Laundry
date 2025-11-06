/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#e6f3ff",
          100: "#cde6ff",
          200: "#9bd0ff",
          300: "#69baff",
          400: "#37a4ff",
          500: "#008dff",
          600: "#0072cc",
          700: "#005899",
          800: "#003e66",
          900: "#002433"
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        section: "0 40px 120px -60px rgba(0, 0, 0, 0.6)"
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 25px 25px, rgba(0, 141, 255, 0.06) 0, rgba(0, 141, 255, 0.06) 2px, transparent 2px, transparent 100%)"
      }
    }
  },
  plugins: []
};
