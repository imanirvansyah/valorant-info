"use client"

import { ClassValue } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useRef } from "react";


type CardProps = {
  label: string;
  link: string;
  img?: string;
  className?: ClassValue
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Card: React.FC<CardProps> = ({ label, img, className, link }) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    (context) => {
      const q = context.selector!;
      // Split only THIS card's title
      const split = new SplitText(titleRef.current!, { type: "chars" });

      gsap.set(q(".overlay"), { opacity: 0 });

      tlRef.current = gsap
        .timeline({ paused: true, defaults: { ease: "power1.out", duration: 0.3 } })
        .to(q(".card"), { boxShadow: "0 16px 16px rgba(255,0,0,0.2)" }, 0)
        .to(q(".overlay"), { opacity: 1 }, 0)
        .from(split.chars, { y: 10, autoAlpha: 0, stagger: 0.03 }, 0);
    },
    { scope: linkRef }
  );

  const enter = () => tlRef.current?.play();
  const leave = () => tlRef.current?.reverse();


  return (
    <Link ref={linkRef} className={cn("w-full h-full relative card", className)} href={link} onMouseEnter={enter} onMouseLeave={leave}>
      <div className="overlay">
        <h3 ref={titleRef} className="text-5xl uppercase font-semibold text-[#FF4655] splitted">{label}</h3>
      </div>
      {!!img && <Image src={img} alt="" width={1000} height={1000} className={`object-cover w-full h-full`} />}
    </Link>
  )
}


