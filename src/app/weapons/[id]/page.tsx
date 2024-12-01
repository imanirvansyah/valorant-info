import { WeaponDetailContainer } from "@/containers/weapon-detail"

export default async function WeaponsDetail({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return <WeaponDetailContainer id={id} />
}