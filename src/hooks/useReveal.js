import { useEffect } from "react";

export default function useReveal(selector = ".tl__row") {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
}
