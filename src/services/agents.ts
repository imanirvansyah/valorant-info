import { callIndependentApi } from "@/helpers/api"



export const AgentService = {
    getListAgent: {
        key: "list-agents",
        call: async () => {
            const data = await callIndependentApi.get("agents");
            return data;
        }
    }
}