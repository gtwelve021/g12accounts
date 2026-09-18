"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionSystem() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      gsap.set("[data-reveal], [data-hero-reveal]", { clearProps: "all" });
      return;
    }

    const context = gsap.context(() => {
      const heroTimeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      if (document.querySelector("[data-hero-reveal]")) {
        heroTimeline.fromTo("[data-hero-reveal]", { y: 32 }, { y: 0, duration: 0.9, stagger: 0.08 });
      }
      if (document.querySelector("[data-hero-panel]")) {
        heroTimeline.fromTo("[data-hero-panel]", { y: 35, scale: 0.97 }, { y: 0, scale: 1, duration: 1.1 }, "-=0.65");
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 32 },
          {
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 86%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: 12,
          ease: "none",
          scrollTrigger: { trigger: element.parentElement, start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
        const target = Number(element.dataset.count ?? 0);
        const suffix = element.dataset.suffix ?? "";
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.7,
          ease: "power2.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
          onUpdate: () => { element.textContent = `${Math.round(counter.value)}${suffix}`; },
        });
      });
    });

    return () => context.revert();
  }, [pathname]);

  return null;
}
