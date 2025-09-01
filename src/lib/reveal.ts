import { gsap, ScrollTrigger } from "./gsap";

export function initRevealX() {
  gsap.set(".reveal-x", { x: 100, autoAlpha: 0, willChange: "transform, opacity" });

  ScrollTrigger.batch(".reveal-x", {
    start: "top 90%",
    once: true,
    onEnter: (batch) => {
      gsap.to(batch, {
        delay: 0.4,
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        overwrite: true,
      });
    }
  });
}