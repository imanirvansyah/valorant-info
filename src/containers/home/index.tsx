import { Fragment } from "react";
import { Navbar } from "@/components/fragments/navbar";
import { CustomButton } from "@/components/fragments/custom-button";


export function HomeContainer() {
  return (
    <div>
      <Background />
      <div className="container mx-auto py-6 px-3 z-20 relative">
        <Navbar />
        <div className="h-[40vh]"></div>
        <div className="text-white h-[50vh] ">
          <div className="text-center">
            <h1 className="text-4xl mb-6">Master the World of <span className="text-brand font-anton">VALORANT</span></h1>
            <p className="font-light">Valorant is a 5v5 character-based tactical shooter where precision and strategy are key to victory. Whether you're a beginner or a seasoned player, learn all about the unique agents, the maps you’ll conquer, and the weapons that will help you rise to the top. Sharpen your skills, form your team, and prepare for the ultimate competition.</p>
          </div>
          <div className="mt-24 flex flex-wrap gap-3 justify-center">
            {MENU.map(menu => <CustomButton key={menu.id} id={menu.id} title={menu.title} subtitle={menu.subtitle} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export const Background = () => {
  return (
    <Fragment>
      <div className="bg-gradient-to-t from-navy from-50% w-screen h-screen fixed top-0 z-10" />
      <img src="/home-background.png" alt="" className="fixed top-0 w-screen h-[70vh] object-cover" />
    </Fragment>
  )
}

const MENU = [
  { id: "agents", title: "Agents", subtitle: "Data and assets of all agents and their abilities" },
  { id: "buddies", title: "Buddies", subtitle: "Data and assets of all weapon buddies" },
  { id: "cards", title: "Cards", subtitle: "Data and assets of all player cards" },
  { id: "currencies", title: "Currencies", subtitle: "Data and assets of all in-game currencies" },
  { id: "gamemodes", title: "Gamemodes", subtitle: "Data and assets of all gamemodes" },
  { id: "maps", title: "Maps", subtitle: "Data and assets of all playable maps" },
  { id: "seasons", title: "Seasons", subtitle: "Data of all seasons" },
  { id: "titles", title: "Titles", subtitle: "Data of all player titles" },
  { id: "weapons", title: "Weapons", subtitle: "Data and assets of all weapons, skins and chromas" },
]