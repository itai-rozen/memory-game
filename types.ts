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
  test: ImageSourcePropType
}
export type messageType = 'win'|'success'|'fail'|undefined|'test';

export type cardPairsStore = {
  pairs : number,
  setPairs: (n: number) => void,
}
