import HeaderPage from "@/components/fragments/header"

export default async function WeaponsDetail({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  return (
    <div className="px-4 py-8 md:p-12  mx-auto">
      <HeaderPage
        title={id}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Weapons", href: "/weapons" },
          { label: id, href: "#" }
        ]}
        centered
      />
      <div className="text-center max-w-[500px] mx-auto mb-24">
        <p>The Odin is a high-cost machine gun. When using Primary Fire, the Odin s fire rate will increase over the duration the weapon is fired to a  maximum amount, but using Alternate Fire will allow the user to shoot at that maximum fire rate immediately.</p>
      </div>
      <div className="w-[500px] h-64 bg-red-500 mx-auto flex items-center justify-center">
        <img src="/classic.png" alt="" />
      </div>
      <div className="grid grid-cols-3 gap-10 max-w-[500px] mx-auto text-center mt-12 mb-24">
        <StatTile title="Primary fire" description="12" />
        <StatTile title="Secondary fire" description="12" />
        <StatTile title="Magazine size" description="12" />
        <StatTile title="Reload Time" description="12" />
        <StatTile title="Scope Time" description="12" />
        <StatTile title="Breach Charge" description="12" />
        <StatTile description="77 - 95 DMG" imgSrc="/head-icon.svg" />
        <StatTile description="31 - 38 DMG" imgSrc="/body-icon.svg" />
        <StatTile description="26 - 32 DMG" imgSrc="/foot-icon.svg" />
      </div>
      <div className="px-4 md:p-12 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl uppercase mb-12">Skins</h2>

        <div className="grid grid-cols-3 gap-3 mx-auto text-center">
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
          <div className="bg-slate-800 w-full h-48 flex items-center justify-center">
            <img src="/classic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}


const StatTile = ({ title, description, imgSrc }: { title?: string; description: string; imgSrc?: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      {!!title && <p>{title}</p>}
      {!!imgSrc && <img src={imgSrc} alt="" className="mb-3" />}
      <span className="text-sm font-bold">{description}</span>
    </div>
  )
}