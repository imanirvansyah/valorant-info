

export default async function WeaponsDetail({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const id = (await params).id
    return (
        <div>{id}</div>
    )
}