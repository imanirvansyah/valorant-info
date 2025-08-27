/* eslint-disable @next/next/no-img-element */
"use client"

import { IconTile, IconTileProps } from "@/components/atoms/icon-tile";
import { gsap, useGSAP } from "@/lib/gsap";
import { useRef, useState } from "react";
import { HeaderDetail } from "@/components/fragments/detail-header";

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
  const videoRef = useRef<HTMLVideoElement>(null);
  const tlRef = useRef<GSAPTimeline | null>(null);
  const [skill, setSkill] = useState<IconTileProps>(DATA.skills[0]);
  useGSAP(() => {
    tlRef.current = gsap.timeline({ paused: true });

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
    <>
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
      <div className="text-center max-w-[500px] mx-auto my-64">
        <p>{DATA.description}</p>
        <div className="mt-48  ">
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
          <h3 className="text-2xl mt-12 mb-3 uppercase">{skill.name}</h3>
          <p>{skill.description}</p>
        </div>
      </div>
    </>
  )
}

export default DetailAgent;