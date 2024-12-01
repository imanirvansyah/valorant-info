"use client"
import { WeaponService } from "@/services/weapons";
import { useQuery } from "@tanstack/react-query";
import { IWeapons } from "./type";

export const WeaponsContainer = () => {
    const { data } = useQuery({ queryKey: [WeaponService.getListWeapons.key], queryFn: WeaponService.getListWeapons.call });
    return (
        <div className="container mx-auto p-8 mt-24 grid grid-cols-3 gap-3">
            <div className="">
                <h1 className="text-white text-4xl mb-3">Weapons</h1>
                <p className="text-white text-sm mb-3">There are various weapons that you can use in game, check it out and match it with your playstyle</p>
            </div>
            {data && data?.data?.data.map((weapon: IWeapons) => (
                <div key={weapon.uuid} className="p-3 border-white border mb-3 hover:bg-[rgba(255,255,255,0.5)] cursor-pointer transition ease-in-out duration-200">
                    <img src={weapon.displayIcon} className="h-16 m-auto" />
                </div>
            ))}
        </div>
    )
}