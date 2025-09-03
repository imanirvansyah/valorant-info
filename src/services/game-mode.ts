import { callIndependentApi } from "@/helpers/api";

export const GameModeService = {

  getListGameMode: {
    key: "list-game-mode",
    call: async () => {
      const data = await callIndependentApi.get("game-modes");
      return data;
    }
  },
}