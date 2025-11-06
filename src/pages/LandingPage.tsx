import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Benefits from "../sections/Benefits";
import CTA from "../sections/CTA";
import Hero from "../sections/Hero";
import Pricing from "../sections/Pricing";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";
import Workflow from "../sections/Workflow";

const LandingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    if (state?.scrollTo) {
      const target = document.getElementById(state.scrollTo);
      if (target) {
        requestAnimationFrame(() => target.scrollIntoView({ behavior: "smooth" }));
      }
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Services />
      <Workflow />
      <Benefits />
      <Pricing />
      <Testimonials />
      <CTA />
    </>
  );
};

export default LandingPage;
