"use client"

import { AgentService } from "@/services/agents"
import { useQuery } from "@tanstack/react-query"
import clsx from "clsx"
import { Fragment, useEffect, useState } from "react"
import { IAgent } from "./type"

export const AgentsContainer = () => {
  const { data } = useQuery({ queryKey: [AgentService.getListAgent.key], queryFn: AgentService.getListAgent.call });
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
  return (
    <Fragment>
      <div className="flex">
        {displayAgent && (
          <>
            <div className="flex-1 relative">
              <img src={displayAgent.background} alt="" className="opacity-10" />
              <img src={displayAgent.fullPortrait} alt="" className="absolute  h-full object-cover z-10 top-0" />
            </div>
            <div className="flex-1 mt-48">
              <h1 className="text-white text-4xl mb-3">{displayAgent.displayName}</h1>
              <p className="text-white text-sm mb-3">{displayAgent.description}</p>
              <div className="flex gap-3 mb-3">
                {displayAgent.abilities.map((ability) => (
                  <div className={clsx("p-5 cursor-pointer", ability.displayName === skill.displayName && "border border-white")} onClick={() => handleSelectSkill(ability)}>
                    <img src={ability.displayIcon} width={50} />
                  </div>
                ))}
              </div>
              {skill && (
                <div className="text-white">
                  <h3 className="text-xl mb-3">{skill.displayName}</h3>
                  <p className="text-sm">{skill.description}</p>
                </div>
              )}
            </div>
          </>
        )}

      </div>
      <div className="absolute left-0 bottom-0 z-20 w-full pt-[70px] bg-gradient-to-t from-navy from-70%">
        <div className="container mx-auto flex flex-wrap gap-3 py-12">
          {agents?.map((agent: IAgent) => (
            <div key={agent.uuid} onClick={() => handleSelectAgent(agent)} className="relative px-3 cursor-pointer">
              <img src={agent.displayIcon} alt="" width={84} className="relative z-10 mx-auto" />
              {displayAgent?.displayName === agent.displayName && (
                <div className="w-full h-1/2 bg-brand absolute bottom-0 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  )
}

