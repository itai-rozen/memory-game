import { create } from "zustand";

type cardPairsStore = {
  pairs : number,
  setPairs: (n: number) => void,
}

export const useCardsPairStore = create<cardPairsStore>((set) => ({
    pairs: 10,
    setPairs: (n) => {
      set(() => ({pairs: n}))
    }
}));