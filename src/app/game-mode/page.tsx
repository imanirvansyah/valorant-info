"use client"

import { Card } from "@/components/atoms/card";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import HeaderPage from "@/components/fragments/header";
import { useRef, useState, useEffect } from "react";
import { GameModeService } from "@/services/game-mode";
import { IDataList } from "@/types/data";
import { ENV } from "@/constant/env";

const GameMode = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<IDataList[] | null>(null);

  useGSAP(() => {
    if (!data) return;
    const q = gsap.utils.selector(containerRef);
    const title = q(".title");
    const breadcrumb = q(".breadcrumb");
    const tl = gsap.timeline({});
    const split = new SplitText(title, { type: "chars" });
    const cards = gsap.utils.toArray<HTMLElement>(q(".card"));
    gsap.set(cards, { autoAlpha: 0, y: 16, willChange: "transform, opacity" });

    tl.from(split.chars, {
      y: 10,
      opacity: 0,
      stagger: 0.05,
    }, "0")
      .from(breadcrumb, {
        delay: 0.2,
        y: 10,
        // opacity: 0,
      }, "<")
      .to(cards, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: { each: 0.08, from: "start" },
        overwrite: "auto",
        onStart: () => cards.forEach(el => (el.style.pointerEvents = "none")),
        onComplete: () => cards.forEach(el => (el.style.pointerEvents = "")),
      }, "<");
  }, { dependencies: [data], scope: containerRef })

  useEffect(() => {
    const fetchData = async () => {
      const res = (await GameModeService.getListGameMode.call()).data.data.gameModes;
      setData(res);
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div className="px-4 py-8 md:p-12  mx-auto" ref={containerRef}>
    <HeaderPage title="Game Modes" breadcrumbs={[
      { label: "Home", href: "/" },
      { label: "Game Modes", href: "#" }
    ]} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {data?.map((mode) => (
        <Card key={mode.id} img={`${ENV.API_URL}${mode.imgUrl}`} label={mode.name} link={`/game-modes/${mode.id}`} className="h-[300px]" />
      ))}
    </div>
  </div>
}

export default GameMode