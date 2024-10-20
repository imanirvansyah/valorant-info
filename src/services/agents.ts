import { callApi } from "@/helpers/api"

export const AgentService = {
    getListAgent: {
        key: "list-agents",
        call: async () => {
            const data = await callApi.get("v1/agents?isPlayableCharacter=true");
            return data;
        }
    }
}