"use client"
import Link from "next/link";
import HeaderPage from "@/components/fragments/header";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { useRef, useState, useEffect } from "react";
import { IDataList } from "@/types/data";
import { WeaponService } from "@/services/weapons";
import { ENV } from "@/constant/env";

const Weapons = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<IDataList[] | null>(null);



  useGSAP(() => {
    if (!data) return;
    const q = gsap.utils.selector(containerRef);
    const title = q(".title");
    const breadcrumb = q(".breadcrumb");
    const tl = gsap.timeline({});
    const split = new SplitText(title, { type: "chars" });
    const cards = gsap.utils.toArray<HTMLElement>(q(".weapon-card"));
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
      const res = (await WeaponService.getListWeapons.call()).data.data.weapons;
      setData(res);
    };
    fetchData();
  }, []);

  if (!data) return <div>Loading...</div>;
  return <div className="px-4 py-8 md:p-12  mx-auto" ref={containerRef}>
    <HeaderPage title="Weapons" breadcrumbs={[
      { label: "Home", href: "/" },
      { label: "Weapons", href: "#" }
    ]} />
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {data.map((weapon) => {
        return <WeaponCard key={weapon.id} name={weapon.name} image={`${ENV.API_URL}${weapon.imgUrl}`} />;
      })}

    </div>
  </div>
}

export default Weapons

const WeaponCard = ({ name, image }: { name: string; image: string }) => {
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  useGSAP(() => {
    const el = linkRef.current!;
    tlRef.current = gsap.timeline({ paused: true, })
      .to(el, {
        backgroundColor: "#FF4655",
        duration: 0.3,
        ease: "power1.out",
        color: "#fff",
        borderColor: "#FF4655",
      })

  }, { scope: linkRef })

  const enter = () => tlRef.current?.play();
  const leave = () => tlRef.current?.reverse();

  return (
    <Link
      ref={linkRef}
      href="/weapons/classic"
      onMouseEnter={enter}
      onMouseLeave={leave}
      className="w-full h-48 border border-1 border-slate-400 p-3 flex flex-col items-center justify-center gap-2 relative weapon-card"
    >
      <p className="font-semibold absolute top-3 left-3">{name}</p>
      <img src={image} alt={name} className="object-fit w-auto h-10 xl:h-16" />
    </Link>
  )
}