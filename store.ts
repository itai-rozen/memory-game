import { create } from "zustand";
import { cardPairsStore } from "./types";


export const useCardsPairStore = create<cardPairsStore>((set) => ({
    pairs: 10,
    setPairs: (n) => {
      set(() => ({pairs: n}))
    }
}));