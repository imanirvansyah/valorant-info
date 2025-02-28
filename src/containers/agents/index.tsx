/* eslint-disable @next/next/no-img-element */
"use client"

import { AgentService } from "@/services/agents"
import { useQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { Fragment, useEffect, useState } from "react"
import { IAgent } from "./type"
import Image from "next/image"
import { LoadingPage } from "@/components/atoms/loading"

export const AgentsContainer = () => {
  const { data, isLoading } = useQuery({ queryKey: [AgentService.getListAgent.key], queryFn: AgentService.getListAgent.call });
  const agents = data?.data.data;
  const [displayAgent, setDisplayAgent] = useState<IAgent>();
  const [skill, setSkill] = useState<{ displayName: string; description: string; }>({ displayName: "", description: "" });

  const handleSelectAgent = (agent: IAgent) => {
    setDisplayAgent(agent);
    setSkill({
      displayName: agent.abilities[0].displayName,
      description: agent.abilities[0].description
    })
  }
  const handleSelectSkill = (ability: { displayName: string; description: string; }) => {
    setSkill({
      displayName: ability.displayName,
      description: ability.description
    })
  }
  useEffect(() => {
    if (agents?.length > 0) {
      setDisplayAgent(agents[0]);
      setSkill(agents[0].abilities);
    }
  }, [agents]);

  if (isLoading) return <LoadingPage />
  return (
    <div className="container mx-auto px-12">
      <div className="flex flex-col md:flex-row gap-3 flex-1 h-[90vh] md:overflow-hidden">
        {displayAgent && (
          <>
            <div className="flex-1 relative">
              <Image width={3000} height={3000} src={displayAgent.background} alt="" className="opacity-10" onLoad={() => console.log("loading")} />
              <Image width={3000} height={3000} src={displayAgent.fullPortrait} alt="" className="absolute h-full xl:h-[120%] object-cover z-10 top-20 md:-top-20" />
            </div>
            <div className="flex-1 mt-24 md:mt-48">
              <h1 className="text-white text-4xl mb-3">{displayAgent.displayName}</h1>
              <p className="text-white text-sm mb-3">{displayAgent.description}</p>
              <div className="flex gap-3 mb-3">
                {displayAgent.abilities.map((ability) => (
                  <div key={ability.displayName} className={clsx("p-5 cursor-pointer", ability.displayName === skill.displayName && "border border-white")} onClick={() => handleSelectSkill(ability)}>
                    {ability.displayIcon && <Image width={1000} height={1000} src={ability.displayIcon} className="w-12" alt="ability icon" />}

                  </div>
                ))}
              </div>
              {skill && (
                <div className="text-white mb-12">
                  <h3 className="text-xl mb-3">{skill.displayName}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              )}
            </div>
          </>
        )}
        <div className="hidden md:block md:absolute left-0 bottom-0 z-20 w-full ">
          <div className="container mx-auto flex flex-wrap gap-3 py-12">
            {agents?.map((agent: IAgent) => (
              <div key={agent.uuid} onClick={() => handleSelectAgent(agent)} className="relative px-3 cursor-pointer hover:bg-brand pt-3 transition-all ease-in-out">
                <Image width={1000} height={1000} src={agent.displayIcon} alt="" className="relative z-10 mx-auto w-24" />
                {displayAgent?.displayName === agent.displayName && (
                  <div className="w-full h-full bg-slate absolute bottom-0 left-0 z-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

