"use client"
import { useQuery } from "@tanstack/react-query";
import { IWeapons } from "../weapons/type";
import { WeaponService } from "@/services/weapons";
import Image from "next/image";
import { LoadingPage } from "@/components/atoms/loading";

export const WeaponDetailContainer: React.FC<{ id: string }> = ({ id }) => {
    const { data, isPending } = useQuery({ queryKey: [WeaponService.getWeaponDetail.key], queryFn: async () => await WeaponService.getWeaponDetail.call(id) });
    const weapon: IWeapons = data?.data.data

    if (isPending) return <LoadingPage />
    if (weapon) {
        return (
            <div className="container mx-auto p-8 mt-12">
                <div className="flex justify-end">
                    <div className="flex-1">
                        <div>
                            <h1 className="text-5xl text-white uppercase">{weapon.displayName}</h1>
                            <p className="text-white mt-8">{weapon.shopData.category} - {weapon.shopData.cost}</p>
                        </div>
                        <div className="mt-20">
                            <Image width={500} height={500} alt={weapon.displayName} src={weapon.displayIcon} />
                            <div className="bg-[rgba(217,217,217,0.11)] p-8 mt-8">
                                <h4 className="text-white text-2xl">WEAPON STATS</h4>
                                <div className="grid grid-cols-3 mt-12 gap-3">
                                    <div className="mb-12">
                                        <p className="text-white">Primary Fire</p>
                                        <p className="text-white text-xl font-bold">{weapon.weaponStats.fireRate}</p>
                                    </div>
                                    <div className="mb-12">
                                        <p className="text-white">Magazine size</p>
                                        <p className="text-white text-xl font-bold">{weapon.weaponStats.magazineSize}</p>
                                    </div>
                                    <div className=" overflow-hidden">
                                        <p className="text-white">Wall Penetration</p>
                                        <p className="text-white text-xl font-bold">{weapon.weaponStats.wallPenetration}</p>
                                    </div>
                                    <div className="mb-12">
                                        <p className="text-white">Equip Time</p>
                                        <p className="text-white text-xl font-bold">{weapon.weaponStats.equipTimeSeconds}</p>
                                    </div>
                                    <div className="mb-12">
                                        <p className="text-white">Reload Time</p>
                                        <p className="text-white text-xl font-bold">{weapon.weaponStats.reloadTimeSeconds}</p>
                                    </div>
                                    <div className=" overflow-hidden">
                                        <p className="text-white">First Bullet Accuracy</p>
                                        <p className="text-white text-xl font-bold">{weapon.weaponStats.firstBulletAccuracy}</p>
                                    </div>
                                </div>
                                <div className="w-full h-[1px] bg-white my-8"></div>
                                <div className="text-center">
                                    <p className="font-bold text-white">Damages</p>
                                    <table className="text-white mt-8 w-full">
                                        <tr>
                                            <td></td>
                                            <td>HEAD</td>
                                            <td>BODY</td>
                                            <td>LEG</td>
                                        </tr>
                                        {weapon.weaponStats.damageRanges.map(damageRange => (
                                            <tr key={damageRange.rangeStartMeters}>
                                                <td className="font-bold p-3">
                                                    {damageRange.rangeStartMeters} - {damageRange.rangeEndMeters}
                                                </td>
                                                <td>
                                                    {damageRange.headDamage}
                                                </td>
                                                <td>
                                                    {damageRange.bodyDamage}
                                                </td>
                                                <td>
                                                    {damageRange.legDamage}
                                                </td>
                                            </tr>
                                        ))}
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 overflow-auto h-[100vh]">
                        {weapon.skins.length > 0 && weapon.skins.map(skin => (
                            <div className="text-center p-3 mb-8" key={skin.uuid}>
                                {!!skin.displayIcon && <Image src={skin.displayIcon} width={500} height={500} alt={skin.displayName} className="mx-auto" />}
                                <p className="text-white mt-6">{skin.displayName}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )

    }
}