/* eslint-disable @next/next/no-img-element */
"use client"

import { IconTile, IconTileProps } from "@/components/atoms/icon-tile";
import { HeaderDetail } from "@/components/fragments/detail-header";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useRef, useState } from "react";
import { SkillDescription } from "@/components/fragments/skill-description";


const DATA = {
  name: "Jett",
  role: "Duelist",
  imgUrl: "/jett-banner.png",
  roleImg: "/DuelistClassSymbol.svg",
  description: "Representing her home country of South Korea, Jett s agile and  evasive fighting style lets her take risks no one else can. She runs  circles around every skirmish, cutting enemies before they even know  what hit them.",
  skills: [
    {
      name: "Cloudburst",
      icon: "/Cloudburst-icon.svg",
      description: "Jett throws a projectile that expands into a brief vision-blocking cloud on impact with a surface.",
      video: "/jett-cloudburst.mp4",
    },
    {
      name: "Updraft",
      icon: "/Updraft-icon.svg",
      description: "Jett propels herself upwards, allowing her to reach higher locations and avoid enemy fire.",
      video: "/jett-updraft.mp4",
    },
    {
      name: "Tailwind",
      icon: "/Tailwind-icon.svg",
      description: "Jett gains a burst of speed in the direction she's moving, allowing her to quickly reposition or escape danger.",
      video: "/jett-tailwind.mp4",
    },
    {
      name: "Blade Storm",
      icon: "/Blade-Storm-icon.svg",
      description: "Blade Storm is an Empowerment ability that Jett can instantly use. On cast, she winds up and equips herself with hitscan throwing knives. Jett can use other abilities and weapons without deactivating Blade Storm; she can re-use the ability to reequip the knives. The knives deal moderate damage and headshots deal high damage. Jett can throw a single knife or all remaining knives at once. If Jett gets a kill with Blade Storm, the knives are replenished to full.",
      video: "/jett-blade-storm.mp4",
    }
  ]
}
const DetailAgent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const tlRef = useRef<GSAPTimeline | null>(null);
  const [skill, setSkill] = useState<IconTileProps>(DATA.skills[0]);

  useGSAP(() => {
    const q = gsap.utils.selector(containerRef);
    const bgImg = q(".bg-img");
    const title = q(".title");
    const breadcrumb = q(".breadcrumb");
    const desc = q("#description");
    const skills = q("#skills");
    const tl = gsap.timeline({});
    const split = new SplitText(title, { type: "chars" });
    const descSplit = new SplitText(desc, { type: "lines" });

    gsap.set(bgImg, { opacity: 0, y: -16, willChange: "transform, opacity" });
    gsap.set(skills, { opacity: 0, x: 100, willChange: "transform, opacity" });

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
      }, "<")
    gsap.to(skills, {
      x: 0,
      autoAlpha: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 1,
      scrollTrigger: {
        trigger: skills,
        start: "top 80%",
      },
    });

  }, {});

  const enter = () => {
    tlRef.current?.play();
    videoRef.current?.play();
  };

  const leave = () => {
    tlRef.current?.reverse();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to start (optional)
    }
  };

  return (
    <div ref={containerRef}>
      <HeaderDetail
        imgUrl={DATA.imgUrl}
        title={DATA.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Agents", href: "/agents" },
          { label: DATA.name, href: "#" }
        ]}
        roleImg={DATA.roleImg}
      />
      <div className="text-center max-w-[500px] mx-auto my-48">
        <p id="description">{DATA.description}</p>
        <div className="mt-48 ">
          <div id="skills">
            <h2 className="text-2xl md:text-4xl uppercase">Special abilities</h2>
            <div className="w-[500px] h-64 mt-12 relative" onMouseEnter={enter} onMouseLeave={leave}>
              <video
                ref={videoRef}
                src={skill.video}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 items-center justify-center">
              {DATA.skills.map((item) => (
                <IconTile key={item.name} active={skill.name === item.name} item={item} onClick={() => setSkill(item)} />
              ))}
            </div>
            <SkillDescription skill={{ name: skill.name, description: skill.description }} index={DATA.skills.indexOf(skill)} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailAgent;
