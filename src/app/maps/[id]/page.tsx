import { MapDetailContainer } from "@/containers/maps-detail"


export default async function Maps({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return <MapDetailContainer id={id} />
}