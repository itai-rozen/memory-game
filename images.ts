
import type { imagesType, gameStatusType } from "./types";

export const imagesArr  = [
  {url: require('./assets/game-images/1.jpg')},
  {url: require('./assets/game-images/2.jpg')},
  {url: require('./assets/game-images/3.jpg')},
  {url: require('./assets/game-images/4.jpg')},
  {url: require('./assets/game-images/5.jpg')},
  {url: require('./assets/game-images/6.jpg')},
  {url: require('./assets/game-images/7.jpg')},
  {url: require('./assets/game-images/8.jpg')},
  {url: require('./assets/game-images/9.jpg')},
  {url: require('./assets/game-images/10.jpg')},
]

export const getImages = (num : number) => {
  const doubleImages = [...imagesArr.slice(0,num),...imagesArr.slice(0,num)]
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
  return cardObjects
}


export const gameStatus: gameStatusType  = {
  fail: require('./assets/game-status/fail.png'),
  success: require('./assets/game-status/success.png'),
  win: require('./assets/game-status/win.gif')
}
