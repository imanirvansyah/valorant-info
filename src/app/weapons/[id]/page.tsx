"use client"

/* eslint-disable @next/next/no-img-element */
import HeaderPage from "@/components/fragments/header";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useRef, useEffect } from "react";
import { initRevealX } from "@/lib/reveal";

export default function WeaponsDetail({ }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);
    const bgImg = q(".bg-img");
    const title = q(".title");
    const breadcrumb = q(".breadcrumb");
    const desc = q("#description");
    const tl = gsap.timeline({});
    const split = new SplitText(title, { type: "chars" });
    const descSplit = new SplitText(desc, { type: "lines" });

    gsap.set(bgImg, { opacity: 0, y: -16, willChange: "transform, opacity" });
    tl.to(bgImg, { opacity: 1, y: 0, duration: 1 })
      .from(split.chars, {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        delay: 0.2,
      }, "0")
      .from(breadcrumb, {
        delay: 0.2,
        y: 10,
        opacity: 0,
      }, "<")
      .from(descSplit.lines, {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        delay: 0.2,
      }, "<");

  }, {});

  useEffect(() => {
    initRevealX();
  }, [])

  return (
    <div className="px-4 py-8 md:p-12  mx-auto" ref={containerRef}>
      <HeaderPage
        title="Classic"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Weapons", href: "/weapons" },
          { label: "Classic", href: "#" }
        ]}
        centered
      />
      <div className="text-center max-w-[500px] mx-auto mb-24 ">
        <p id="description">The Odin is a high-cost machine gun. When using Primary Fire, the Odin s fire rate will increase over the duration the weapon is fired to a  maximum amount, but using Alternate Fire will allow the user to shoot at that maximum fire rate immediately.</p>
      </div>
      <div className="w-[500px] h-64 bg-red-500 mx-auto flex items-center justify-center reveal-x">
        <img src="/classic.png" alt="" />
      </div>
      <div className="grid grid-cols-3 gap-10 max-w-[500px] mx-auto text-center mt-12 mb-24 reveal-x">
        <StatTile title="Primary fire" description="12" />
        <StatTile title="Secondary fire" description="12" />
        <StatTile title="Magazine size" description="12" />
        <StatTile title="Reload Time" description="12" />
        <StatTile title="Scope Time" description="12" />
        <StatTile title="Breach Charge" description="12" />
        <StatTile description="77 - 95 DMG" imgSrc="/head-icon.svg" />
        <StatTile description="31 - 38 DMG" imgSrc="/body-icon.svg" />
        <StatTile description="26 - 32 DMG" imgSrc="/foot-icon.svg" />
      </div>
      <div className="px-4 md:p-12 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl uppercase mb-12 reveal-x">Skins</h2>
        <div className="grid grid-cols-3 gap-3 mx-auto text-center reveal-x">
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}


const StatTile = ({ title, description, imgSrc }: { title?: string; description: string; imgSrc?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {!!title && <p>{title}</p>}
      {!!imgSrc && <img src={imgSrc} alt="" className="mb-3" />}
      <span className="text-sm font-bold">{description}</span>
    </div>
  )
}