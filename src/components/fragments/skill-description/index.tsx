"use client"

import { gsap, useGSAP } from "@/lib/gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

type Skill = { name: string; description: string };

export const SkillDescription = ({
  skill,
  index,            // index of selected skill in DATA.skills
}: {
  skill: Skill
  index: number;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const prevIndex = useRef(index);     // to compute direction
  const prevH = useRef(0);

  useLayoutEffect(() => {
    // measure previous height before React paints new content
    prevH.current = wrapRef.current?.offsetHeight ?? 0;
  }, [skill]);

  useGSAP(() => {
    // run once for base state
    gsap.set([titleRef.current, descRef.current], { autoAlpha: 1 });
  }, []);

  useEffect(() => {
    const dir = Math.sign(index - prevIndex.current) || 1; // 1 = right, -1 = left
    const wrap = wrapRef.current!;
    const t = titleRef.current!;
    const p = descRef.current!;

    // 1) height animation (prev → auto)
    const newH = wrap.scrollHeight; // after DOM updated
    gsap.fromTo(
      wrap,
      { height: prevH.current },
      { height: newH, duration: 0.28, ease: "power2.out", clearProps: "height" }
    );

    // 2) slide/fade in title + paragraph (directional)
    gsap.from([t, p], {
      x: dir * 24,
      // autoAlpha: 0,
      duration: 0.28,
      ease: "power2.out",
      stagger: 0.05,
    });

    prevIndex.current = index;
  }, [skill, index]);

  return (
    <div ref={wrapRef} className="mt-12 reveal-x">
      <h3 ref={titleRef} className="text-2xl mb-3 uppercase">{skill.name}</h3>
      <p ref={descRef}>{skill.description}</p>
    </div>
  );
}
