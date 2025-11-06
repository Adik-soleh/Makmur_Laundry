import { useEffect, useRef } from "react";

const useScrollReveal = <T extends HTMLElement>() => {
  const elementRef = useRef<T | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || !("IntersectionObserver" in window)) {
      return;
    }

    element.classList.add("scroll-reveal");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return elementRef;
};

export default useScrollReveal;
