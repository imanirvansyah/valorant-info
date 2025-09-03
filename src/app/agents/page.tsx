"use client"
import { Card } from "@/components/atoms/card";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import HeaderPage from "@/components/fragments/header";
import { useRef, useState, useEffect } from "react";
import { AgentService } from "@/services/agents";
import { IDataList } from "@/types/data";
import { ENV } from "@/constant/env";

export default function Agents() {
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
            const res = (await AgentService.getListAgent.call()).data.data.agents;
            setData(res);
        };
        fetchData();
    }, []);

    if (!data) return <div>Loading...</div>;
    return <div className="px-4 py-8 md:p-12  mx-auto" ref={containerRef}>
        <HeaderPage title="Agents" breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Agents", href: "#" }
        ]} />
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
            {data?.map((agent) => (
                <Card key={agent.id} img={`${ENV.API_URL}${agent.imgUrl}`} label={agent.name} link={`/agents/${agent.id}`} />
            ))}
        </div>
    </div>
}
