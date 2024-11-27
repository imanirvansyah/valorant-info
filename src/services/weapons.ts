import { callApi } from "@/helpers/api"

export const WeaponService = {
    getListWeapons: {
        key: "list-weapons",
        call: async () => {
            const data = await callApi.get("v1/weapons");
            return data;
        }
    }
}