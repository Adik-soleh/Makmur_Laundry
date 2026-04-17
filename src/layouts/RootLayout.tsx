import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default RootLayout;
