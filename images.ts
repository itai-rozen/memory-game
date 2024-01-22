
import type { ImageSourcePropType } from "react-native";


export type imagesType = {
  url: ImageSourcePropType,
  id: number
  isFlipped: boolean,
  isMatched: boolean,
};

export const imagesArr  = [
  {
    url: require('./assets/game-images/1.jpg'),
  },
  {
    url: require('./assets/game-images/2.jpg'),
  },
  {
    url: require('./assets/game-images/3.jpg'),
  },
  {
    url: require('./assets/game-images/4.jpg'),
  },
  {
    url: require('./assets/game-images/5.jpg'),
  },
  {
    url: require('./assets/game-images/6.jpg'),
  },
  {
    url: require('./assets/game-images/7.jpg'),
  },
  {
    url: require('./assets/game-images/8.jpg'),
  },
  {
    url: require('./assets/game-images/9.jpg'),
  },
]
const doubleImages = [...imagesArr,...imagesArr]
const cardObjects : imagesType[] = [];
for (let i = 0; i < doubleImages.length; i++) {
  const image = doubleImages[i].url
  cardObjects.push({
    url: image,
    id: i,
    isFlipped: false, 
    isMatched: false
  })
}

export default  cardObjects
