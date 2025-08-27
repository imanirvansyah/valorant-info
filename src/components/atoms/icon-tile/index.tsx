"use client"

import { gsap, useGSAP } from "@/lib/gsap";
import { useEffect, useRef } from "react";

export interface IconTileProps {
  name: string;
  icon: string;
  description: string;
  video: string;
}

export const IconTile = ({
  item,
  active,
  onClick,
}: {
  item: IconTileProps;
  active: boolean;
  onClick: () => void;
}) => {
  const tlRef = useRef<GSAPTimeline | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const root = rootRef.current;
    const overlay = overlayRef.current;

    gsap.set(overlay, { opacity: 0, scale: 0.8 });
    gsap.set(root, { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)" });

    tlRef.current = gsap.timeline({ paused: true });
    tlRef.current.to(overlay, { opacity: 1, scale: 1, duration: 0.3 }, 0);
    tlRef.current.to(root, { y: -10, boxShadow: "0px 4px 8px rgba(0,0,0,0.2)", duration: 0.3 }, "-=0.2");
  }, {});

  useEffect(() => {
    const tl = tlRef.current;
    if (!tl) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    active ? tl.play() : tl.reverse();

  }, [active]);

  const onEnter = () => {
    if (!active) tlRef.current?.play();
  };
  const onLeave = () => {
    if (!active) tlRef.current?.reverse();
  };



  return (
    <div className="w-16 h-16  mt-12 p-3 cursor-pointer relative flex justify-center items-center"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      <div
        ref={overlayRef}
        className=" bg-[#FF4655] w-full h-full absolute top-0 -z-10"
        style={{
          mixBlendMode: "multiply",
        }}
      ></div>
      <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
    </div>
  )
}