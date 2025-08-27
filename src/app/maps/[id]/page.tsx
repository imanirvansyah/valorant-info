/* eslint-disable react/no-unescaped-entities */
import { Card } from "@/components/atoms/card";
import Link from "next/link";

const DetailAgent = () => {
    return (
        <>
            <div className="px-4  md:p-12 mx-auto relative h-72 xl:h-[400px]">
                <div className="absolute bg-red-200 top-0 left-0 w-screen h-72 xl:h-[400px] -z-10"></div>
                <h1 className="text-[#FF4655] text-5xl md:text-8xl uppercase">Ascent</h1>
                <p className="uppercase mt-4 text-[#FF4655]"><Link href="/">valorant</Link> / <Link href="/maps">maps</Link> / Ascent</p>
                <div className=" absolute bottom-3 w-12 h-12 bg-red-500 mt-10"></div>
            </div>
            <div className="text-center max-w-[500px] mx-auto my-64">
                <p>An open playground for small wars of position and attrition divide  two sites on Ascent. Each site can be fortified by irreversible bomb  doors; once they’re down, you’ll have to destroy them or find another  way. Yield as little territory as possible.</p>
                <div className="mt-48 ">
                    <h2 className="text-2xl md:text-4xl uppercase">Layout</h2>
                    <div className="w-[500px] h-64 bg-red-200 mt-12"></div>
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
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" />
                    <Card img="/jett-homepage.png" label="Agent" link="/maps/ascent" />
                </div>
            </div>
        </>
    )
}

export default DetailAgent;