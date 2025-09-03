import { callApi, callIndependentApi } from "@/helpers/api"

export const WeaponService = {
    getListWeapons: {
        key: "list-weapons",
        call: async () => {
            const data = await callIndependentApi.get("weapons");
            return data;
        }
    },
    getWeaponDetail: {
        key: "detail-weapon",
        call: async (id: string) => {
            const data = await callApi.get(`v1/weapons/${id}`);
            return data;
        }
    }
}