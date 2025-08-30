/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/atoms/card";
import { HeaderDetail } from "@/components/fragments/detail-header";


const DATA = {
    name: "Ascent",
    imgUrl: "/ascent-banner.png",
    description: "Representing her home country of South Korea, Jett s agile and  evasive fighting style lets her take risks no one else can. She runs  circles around every skirmish, cutting enemies before they even know  what hit them.",
    skills: [
        {
            name: "Cloudburst",
            icon: "/Cloudburst-icon.svg",
            description: "Jett throws a projectile that expands into a brief vision-blocking cloud on impact with a surface.",
            video: "/jett-cloudburst.mp4",
        },
        {
            name: "Updraft",
            icon: "/Updraft-icon.svg",
            description: "Jett propels herself upwards, allowing her to reach higher locations and avoid enemy fire.",
            video: "/jett-updraft.mp4",
        },
        {
            name: "Tailwind",
            icon: "/Tailwind-icon.svg",
            description: "Jett gains a burst of speed in the direction she's moving, allowing her to quickly reposition or escape danger.",
            video: "/jett-tailwind.mp4",
        },
        {
            name: "Blade Storm",
            icon: "/Blade-Storm-icon.svg",
            description: "Blade Storm is an Empowerment ability that Jett can instantly use. On cast, she winds up and equips herself with hitscan throwing knives. Jett can use other abilities and weapons without deactivating Blade Storm; she can re-use the ability to reequip the knives. The knives deal moderate damage and headshots deal high damage. Jett can throw a single knife or all remaining knives at once. If Jett gets a kill with Blade Storm, the knives are replenished to full.",
            video: "/jett-blade-storm.mp4",
        }
    ]
}

const DetailAgent = () => {
    return (
        <>
            <HeaderDetail
                imgUrl={DATA.imgUrl}
                title={DATA.name}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Maps", href: "/maps" },
                    { label: DATA.name, href: "#" }
                ]}
            />
            <div className="text-center max-w-[500px] mx-auto my-64">
                <p>An open playground for small wars of position and attrition divide  two sites on Ascent. Each site can be fortified by irreversible bomb  doors; once they’re down, you’ll have to destroy them or find another  way. Yield as little territory as possible.</p>
                <div className="mt-48 ">
                    <h2 className="text-2xl md:text-4xl uppercase">Layout</h2>
                    <img src="/layout-ascent.png" alt="layout ascent" className="w-[500px] mt-12" />
                </div>
                <div className="mt-48 ">
                    <h2 className="text-2xl md:text-4xl uppercase">Unique Features</h2>
                    <p className="mt-8">Ascent's features include mechanical doors leading into its spike sites. Each site has one door (A Link for A and Market for B) that is opened  at the start of each round. Players can use a switch on the site side of the door (Next to the door on A and on a table in Toolshed on B) to  close or open the door. These doors are impenetrable while closed but  have 500 HP, allowing players to damage and eventually destroy them. Once destroyed, the doorway remains permanently open for the rest of the round.</p>
                    <p className="mt-8">The two walls separating Courtyard from Link also have a destructible  panel each to cover them. Whilst intact, they absorb damage and cannot  be penetrated by gunfire. The panels however have 400 HP each and can be damaged, with colored indicators on them implying how much health they  have left (starts blue, then turns yellow and then red as they take more damage). They can eventually be destroyed to allow players to wallbang  through these walls for the rest of the round.</p>
                    <p className="mt-8">A Window also has a destructible glass pane looking into A Garden. It  will be immediately destroyed upon contact with any bullets, ability  projectiles, or other abilities that an agent can guide through the  glass (e.g. Phoenix's  Blaze). Any abilities that an agent has to possess to use (e.g. Sova's  Owl Drone) or mobile abilities deployed on the ground that the agent doesn't control further (e.g. Raze's  Boom Bot) will not break through on contact with the glass.</p>
                </div>
            </div>
            <div className="px-4 md:p-12 mx-auto text-center">
                <h2 className="text-2xl md:text-4xl uppercase mb-12">galleries</h2>
                <div className="grid grid-cols-3 gap-3 ">
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" className="h-[300px]" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" className="h-[300px]" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" className="h-[300px]" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" className="h-[300px]" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" className="h-[300px]" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" className="h-[300px]" />
                </div>
            </div>
        </>
    )
}

export default DetailAgent;