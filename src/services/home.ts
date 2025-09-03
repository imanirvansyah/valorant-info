import { callIndependentApi } from "@/helpers/api"

export const HomeService = {
  getHomeMenu: async () => {
    try {
      const { data } = await callIndependentApi.get("");
      return data;
    } catch (err) {
      console.error("Failed to fetch home menu:", err);
      throw err;
    }
  },
};