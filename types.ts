import type { ImageSourcePropType } from "react-native";


export type imagesType = {
  url: ImageSourcePropType,
  id: number
  isFlipped: boolean,
  isMatched: boolean,
};

export type gameStatusType = {
  success: ImageSourcePropType,
  win: ImageSourcePropType,
  fail: ImageSourcePropType,
}
export type messageType = 'win'|'success'|'fail'|undefined;

export type cardPairsStore = {
  pairs : number,
  setPairs: (n: number) => void,
}
