import Link from "next/link";

const DetailAgent = () => {
  return (
    <>

      <div className="px-4  md:p-12 mx-auto relative h-72 xl:h-[400px]">
        <div className="absolute bg-red-200 top-0 left-0 w-screen h-72 xl:h-[400px] -z-10"></div>
        <h1 className="text-[#FF4655] text-5xl md:text-8xl uppercase">Jett</h1>
        <p className="uppercase mt-4 text-[#FF4655]"><Link href="/">valorant</Link> / <Link href="/agents">agents</Link> / Jett</p>
        <div className=" absolute bottom-3 w-12 h-12 bg-red-500 mt-10"></div>
      </div>
      <div className="text-center max-w-[500px] mx-auto my-64">
        <p>Representing her home country of South Korea, Jett s agile and  evasive fighting style lets her take risks no one else can. She runs  circles around every skirmish, cutting enemies before they even know  what hit them.</p>
        <div className="mt-48  ">
          <h2 className="text-2xl md:text-4xl uppercase">Special abilities</h2>

          <div className="w-[500px] h-64 bg-red-200 mt-12"></div>

          <div className="flex gap-3 items-center justify-center">
            <div className="w-24 h-24 bg-red-200 mt-12"></div>
            <div className="w-24 h-24 bg-red-200 mt-12"></div>
            <div className="w-24 h-24 bg-red-200 mt-12"></div>
            <div className="w-24 h-24 bg-red-200 mt-12"></div>
          </div>
          <h3 className="text-2xl mt-12 mb-3 uppercase">Cloudburst</h3>
          <p>Jett throws a projectile that expands into a brief vision-blocking cloud on impact with a surface.</p>

        </div>
      </div>
    </>
  )
}

export default DetailAgent;