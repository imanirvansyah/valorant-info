
"use client"

import { MapsService } from "@/services/maps";
import { IMap } from "@/services/maps.type";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export const MapDetailContainer: React.FC<{ id: string }> = ({ id }) => {

  const { data, isPending } = useQuery({ queryKey: [MapsService.getMapDetail.key], queryFn: async () => await MapsService.getMapDetail.call(id!) });
  const map: IMap = data?.data.data;

  if (!isPending) {
    return (
      <div className="container mx-auto p-8">
        <Image src={map.splash} alt={map.displayName} className="object-cover h-80 w-full" width={1000} height={1000} />
        <div className="mt-12">
          <h1 className="text-white text-5xl">{map.displayName}</h1>
          <p className="text-white mt-2">{map.coordinates}</p>
        </div>
        <div className="flex justify-between">
          <div className="mt-12 w-1/2">
            <p className="text-xl text-white tracking-widest">Callouts</p>
            <p className="text-white mt-2 font-light">
              {map.callouts?.map((callout, idx) => `${callout.regionName} ${(idx + 1 < map.callouts.length) ? "| " : ""}`)}
            </p>
          </div>
          <Image src={map.displayIcon} alt="" className="h-[500px]" width={500} height={500} />
        </div>
      </div>
    )
  }
}

