
import type { ImageSourcePropType } from "react-native";


export type imagesType = {
  url: ImageSourcePropType,
  isFlipped: boolean,
  isMatched: boolean,
  id?: number
};

const imagesArr : imagesType[]  = [
  {
    url: require('./assets/1.jpg'),
    isFlipped: false,
    isMatched: false
  },
  {
    url: require('./assets/2.jpg'),
    isFlipped: false,
    isMatched: false
  },
  {
    url: require('./assets/3.jpg'),
    isFlipped: false,
    isMatched: false
  },
  {
    url: require('./assets/4.jpg'),
    isFlipped: false,
    isMatched: false
  },
  {
    url: require('./assets/5.jpg'),
    isFlipped: false,
    isMatched: false
  },
]
export default imagesArr
