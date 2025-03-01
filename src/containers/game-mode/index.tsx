/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import Link from "next/link";
import { MapsService } from "@/services/maps";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { IGameMode } from "./type";
import { LoadingPage } from "@/components/atoms/loading";

export const GameModeContainer = () => {
  const { data, isPending } = useQuery({ queryKey: [MapsService.getListGameMode.key], queryFn: MapsService.getListGameMode.call });
  const gameMode: IGameMode[] = data?.data?.data || [];

  if (isPending) return <LoadingPage />
  if (!!gameMode && !isPending) {
    return (
      <div className="container mx-auto p-8">
        <div className="mt-12">
          <h1 className="text-5xl text-white">GAME MODE</h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-12">
            {gameMode?.filter((gm) => !!gm.listViewIconTall).map((gm) => (
              <Link href={`#`} key={gm.uuid} className="relative cursor-pointer">
                <div className="flex flex-col items-center justify-end bg-[rgba(0,0,0,0.5)] absolute w-full h-full p-3">
                  <h1 className="text-white text-2xl">{gm.displayName}</h1>
                  <p className="text-white text-sm text-center">{gm.description}</p>
                </div>
                {gm.listViewIconTall && <Image src={gm.listViewIconTall} alt="" className="h-full object-cover" width={300} height={300} />}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}