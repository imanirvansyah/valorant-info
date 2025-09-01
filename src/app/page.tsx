"use client"

import { Card } from "@/components/atoms/card";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const descRefM = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);
    const tl = gsap.timeline({});
    const splitTitle = new SplitText(titleRef.current, { type: "words" });
    const splitDesc = new SplitText(descRef.current, { type: "lines" });
    const splitDescM = new SplitText(descRefM.current, { type: "lines" });
    const cards = gsap.utils.toArray<HTMLElement>(q(".card"));

    gsap.set(cards, { autoAlpha: 0, y: 16, willChange: "transform, opacity" });
    tl.from(splitTitle.words, {
      y: 10,
      opacity: 0,
      stagger: 0.05,
    }, 0)
      .from(splitDesc.lines, {
        delay: 0.2,
        y: 10,
        opacity: 0,
        stagger: 0.05,
      }, 0)
      .from(splitDescM.lines, {
        delay: 0.2,
        y: 10,
        opacity: 0,
        stagger: 0.05,
      }, 0)
      .to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: { each: 0.08, from: "start" },
        overwrite: "auto",
        onStart: () => cards.forEach(el => (el.style.pointerEvents = "none")),
        onComplete: () => cards.forEach(el => (el.style.pointerEvents = "")),
      }, "0");
  }, { dependencies: [] })

  return (
    <div ref={containerRef} className="px-4 py-8 md:p-12  mx-auto">
      <h1 className="text-5xl md:text-8xl xl:text-9xl text-[#FF4655] uppercase" ref={titleRef}>not just a tac-shooter fps</h1>
      <p className="md:hidden text-sm text-[#FF4655] uppercase mt-4" ref={descRefM}>Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities</p>
      <div className="grid grid-cols-2 h-[80vh] gap-3 mt-4 md:hidden">
        <div className="flex flex-col gap-3">
          <Card img="/jett-homepage.png" label="Agent" link="/agents" />
          <Card img="/weapons-homepage.png" label="Weapons" link="/weapons" />
        </div>
        <div className="flex flex-col gap-3">
          <Card img="/gamemode-homepage.png" label="Game Mode" link="/game-modes" />
          <Card img="/maps-homepage.png" label="Maps" link="/maps" />
        </div>
      </div>
      <div className="hidden md:grid grid-flow-col grid-cols-12 gap-4  h-[80vh] mt-6">
        <div className="col-span-4 flex flex-col gap-3">
          <p className="text-[#FF4655] uppercase" ref={descRef}>Riot Games presents VALORANT: a 5v5 character-based tactical FPS where precise gunplay meets unique agent abilities</p>
          <Card img="/jett-homepage.png" label="Agent" link="/agents" />
        </div>
        <div className="col-span-8 flex flex-col gap-3">
          <div className="flex-1 w-full h-1/2 flex gap-3">
            <Card img="/gamemode-homepage.png" label="Game Mode" link="/game-mode" />
            <Card img="/weapons-homepage.png" label="Weapons" link="/weapons" />
          </div>
          <Card img="/maps-homepage.png" label="Maps" link="/maps" className="h-1/2" />
        </div>
      </div>
    </div>
  )

}


