/* eslint-disable @next/next/no-img-element */

import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
export function HomeContainer() {
  return (
    <div className="container mx-auto px-8">
      <div className="grid grid-cols-12 gap-3 h-[85vh]">
        <Card href="/agents" className="col-span-12 md:col-span-6 xl:col-span-4 px-8 md:p-12 bg-gradient-to-b from-navy to-brand">
          <h1 className="text-3xl md:text-5xl  mt-4 md:mt-12 text-white relative">AGENTS</h1>
          <Image width={1000} height={1000} src="/agent-mobile.png" alt="agent-image-mobile" className="md:hidden h-full object-cover absolute left-0 bottom-0 z-0" />
          <Image width={1000} height={1000} src="/agents.png" alt="agent-image" className="hidden md:block h-full w-full object-cover absolute left-0 bottom-0 z-0" />
        </Card>
        <div className="col-span-12 md:col-span-6 xl:col-span-8 grid grid-cols-8 gap-3 h-full">
          <Card href="/maps" className="col-span-12 xl:col-span-8 px-8 bg-red">
            <h1 className="text-3xl md:text-5xl  mt-4 md:mt-12 text-white relative z-10">MAPS</h1>
            <Image width={3000} height={1000} src="/ascent.png" className="absolute h-full w-full object-cover top-0 left-0 z-0" alt="map-image" />
          </Card>
          <Card href="/weapons" className="col-span-12 xl:col-span-5 p-8 bg-red ">
            <h1 className="text-3xl md:text-5xl mt-4 text-white relative z-10 w-1/2 !leading-relaxed">WEAPONS & SKINS</h1>
            <Image width={1000} height={1000} src="/weapons.png" className="absolute h-full w-full object-cover top-0 left-0 z-0" alt="weapons-image" />
          </Card>
          <Card href="/game-mode" className="col-span-12 xl:col-span-3 p-8 bg-red">
            <h1 className="text-3xl md:text-5xl  mt-4 text-white relative z-10 w-1/2 !leading-relaxed">GAME MODE</h1>
            <Image width={1000} height={1000} src="/game-mode.png" className="absolute h-full w-full object-cover top-0 left-0 z-0" alt="game-mode-image" />
          </Card>
        </div>
      </div>
    </div>
  );
}


const Card: React.FC<{
  href: string;
  className: string;
  children: React.ReactNode;
}> = ({ href, className, children }) => {
  return (
    <Link href={href} className={clsx("rounded-xl overflow-hidden relative cursor-pointer border-2 border-black hover:border-white transition-all ease-in duration-300", className)}>
      {children}
    </Link>
  )
}