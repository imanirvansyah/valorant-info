/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import { MapsService } from "@/services/maps";
import { useQuery } from "@tanstack/react-query";
import { IMap } from "@/services/maps.type";
import Image from "next/image";


export const MapsContainer = () => {
  const { data, isPending } = useQuery({ queryKey: [MapsService.getListMap.key], queryFn: MapsService.getListMap.call });
  const mapData = data?.data?.data || [];

  if (!!mapData && !isPending) {
    return (
      <div className="container mx-auto p-8">
        <div className="mt-12">
          <h1 className="text-5xl text-white">MAPS</h1>
          <div className="grid grid-cols-3 gap-3 mt-12">
            {mapData?.map((map: IMap) => (
              <Link href={`/maps/${map.uuid}`} key={map.uuid} className="h-[300px] col-auto relative cursor-pointer">
                <div className="flex items-center justify-center bg-[rgba(0,0,0,0.5)] absolute w-full h-full">
                  <h1 className="text-white text-2xl">{map.displayName}</h1>
                </div>
                <Image src={map.splash} alt="" className="h-full object-cover" width={500} height={500} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}