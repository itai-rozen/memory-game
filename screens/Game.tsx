import Card from "../components/Card";
import Message from "../components/Message";
import { View, Text } from "react-native";
import styles from './../styles'
import cardObjects from './../images'
import { useState, useEffect } from "react";
import type { imagesType } from "./../images";
import CardTest from "../components/CardTest";
export default function Game() {

  const [cards, setCards] = useState<imagesType[]>([])
  const [msg, setMsg] = useState<string>('')

  const initGame = () => setCards([]);

  const updateCards2 = (prop : string, success : boolean, id1 : number, id2 : number|null = null) => {
    const cardIds = id2 ? [id1,id2] : [id1];
    const updatedCards = cards.map(card => {
      return cardIds.includes(card.id) ? Object.assign(card, {[prop] : success}) : card
    }) 
    setCards(updatedCards)
  }

  const popMessage = (message : string, interval: number) => {
    setMsg(message)
    setTimeout(() => {
      setMsg('')
    }, interval)
  }

  useEffect(() => {
    if (!cards.length)
      setCards(cardObjects.sort(() => Math.random() - 0.5))

    const allMatched = cards.length && cards.every(card => card.isMatched)
    if (allMatched) {
      setMsg('again?')
      // end game
    }
    const flippedImages = cards.filter(obj => obj.isFlipped && !obj.isMatched);
    console.log('flipped cards: ', flippedImages)
    if (flippedImages.length > 1) {
      const { id: id1 } = flippedImages[0]
      const { id: id2 } = flippedImages[1]
      if (flippedImages[0].url === flippedImages[1].url) {
        updateCards2('isMatched', true, id1, id2)
        popMessage('success', 2000);
      } else {
        popMessage('wrong', 2000)
        setTimeout(() => {
          updateCards2('isFlipped', false, id1, id2)
        }, 2000)
      }
    }
  }, [cards])

  return (<>
    <View style={styles.Cards}>
      {
        cards.map((cardObj) => (
          <CardTest key={cardObj.id} cardObj={cardObj} setCards={setCards} cards={cards} />
        ))
      }
      {msg && <View style={styles.MessageContainer}>
          <Message msg={msg} color='yellow' onInit={initGame} />
        </View>
            }
    </View>

  </>
  )
}