"use client"
import { WeaponService } from "@/services/weapons";
import { useQuery } from "@tanstack/react-query";
import { IWeapons } from "./type";
import Image from "next/image";
import Link from "next/link";
import { LoadingPage } from "@/components/atoms/loading";

export const WeaponsContainer = () => {
  const { data, isPending } = useQuery({ queryKey: [WeaponService.getListWeapons.key], queryFn: WeaponService.getListWeapons.call });

  if (isPending) return <LoadingPage />
  return (
    <div className="container mx-auto p-8 mt-24 grid grid-cols-3 gap-3">
      <div className="">
        <h1 className="text-white text-4xl mb-3">Weapons</h1>
        <p className="text-white text-sm mb-3">There are various weapons that you can use in game, check it out and match it with your playstyle</p>
      </div>
      {data && data?.data?.data.map((weapon: IWeapons) => (
        <Link href={`weapons/${weapon.uuid}`} key={weapon.uuid}>
          <div className="p-3 border-white border mb-3 hover:bg-[rgba(255,255,255,0.5)] cursor-pointer transition ease-in-out duration-200">
            <Image src={weapon.displayIcon} className=" object-cover m-auto" width={500} height={500} alt={weapon.displayName} />
          </div>
        </Link>
      ))}
    </div>
  )
}