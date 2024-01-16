import Card from "../components/Card";
import Message from "../components/Message";
import {  View, Text } from "react-native";
import styles from './../styles'
import images from './../images'
import { useState, useEffect } from "react";
import type { imagesType } from "./../images";
import CardTest from "../components/CardTest";
export default function Game() {
  // Object.keys(images).map(imgKey => <Card imgKey={imgKey} />)
  Array.prototype.push.apply(images, [...images])

  const shuffledCards = images.map(card => Object.assign(card, {id: Math.floor(Math.random() * 1000)}))
  const [cards, setCards] = useState<imagesType[]>(shuffledCards)
  const [msg, setMsg] = useState<string>('')

  const updateCards = (id1: number, id2 : number, success: boolean):void => {
    const updatedCards = cards.map(card => {
      return [id1,id2].includes(card.id ?? -1) ? 
              Object.assign(card, success ?  
                        {isMatched: true} : 
                        {isFlipped: false}
                        )     : 
              card
    })
    setCards(updatedCards);
    setMsg(success ? 'success' : 'wrong');
    setTimeout(() => {setMsg('')}, 2000)
  }
  useEffect(() => {
  console.log('shuffled cards: ', cards.map(card => card.id))

    const allMatched = cards.every(card => card.isMatched)
    if (allMatched) {
      // end game
    }
    const flippedImages = cards.filter(obj => obj.isFlipped && !obj.isMatched);
    console.log('cards: ', flippedImages)
    if (flippedImages.length > 1) {
      const { id: id1} = flippedImages[0]
      const { id: id2} = flippedImages[1]
      if (flippedImages[0].url === flippedImages[1].url) {
        updateCards(id1 ?? -1, id2 ?? -1, true)
      } else {

      }
    }
  }, [cards])
    return (<>
      <View style={styles.Cards}>
      {
        cards.map((imgObj,i) => (
          <Card key={imgObj.url as string +i+Math.random()} imgObj={imgObj} setCards={setCards} />
        ))
      }
      <Message msg="" color={msg === 'success' ? 'green' : 'red'} />
      </View>
</>
  )
}