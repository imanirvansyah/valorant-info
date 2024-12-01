import { callApi } from "@/helpers/api"

export const MapsService = {
    getListMap: {
        key: "list-maps",
        call: async () => {
            const data = await callApi.get("v1/maps");
            return data;
        }
    },
    getMapDetail: {
        key: "detail-maps",
        call: async (id: string) => {
            const data = await callApi.get(`v1/maps/${id}`);
            return data;
        }
    },
    getListGameMode: {
        key: "list-game-mode",
        call: async () => {
            const data = await callApi.get("v1/gamemodes");
            return data;
        }
    },
}