"use client"
import { WeaponService } from "@/services/weapons";
import { useQuery } from "@tanstack/react-query";

export const WeaponsContainer = () => {
    const { data } = useQuery({ queryKey: [WeaponService.getListWeapons.key], queryFn: WeaponService.getListWeapons.call });
    return (
        <div className="mt-24 grid grid-cols-4 gap-3">
            <h1 className="text-white text-4xl mb-3">Weapons in <span className="text-brand">VALORANT</span></h1>
            <p className="text-white text-sm mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit ex architecto molestiae impedit nam facilis dolores, molestias labore iste quas a nobis soluta doloribus ut reprehenderit tempora? Eos, corporis.</p>
            {data && data?.data?.data.map((weapon: any) => (
                <div className="p-3 border-white border mb-3 hover:bg-brand cursor-pointer transition ease-in-out duration-200">
                    <img src={weapon.displayIcon} className="h-16 m-auto" />
                </div>
            ))}
        </div>
    )
}