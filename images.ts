
import type { ImageSourcePropType } from "react-native";


export type imagesType = {
  url: ImageSourcePropType,
  id?: number
  isFlipped?: boolean,
  isMatched?: boolean,
};

const imagesArr : imagesType[]  = [
  {
    url: require('./assets/1.jpg'),
  },
  {
    url: require('./assets/2.jpg'),
  },
  {
    url: require('./assets/3.jpg'),
  },
  {
    url: require('./assets/4.jpg'),
  },
  {
    url: require('./assets/5.jpg'),
  },
]
export default [...imagesArr,...imagesArr].map((card,i) => Object.assign(card, {id: i+1,isFlipped: false, isMatched: false}))
