import Card from "../components/Card";
import Message from "../components/Message";
import { View, Text } from "react-native";
import styles from './../styles'
import images from './../images'
import { useState, useEffect } from "react";
import type { imagesType } from "./../images";
export default function Game() {
  const shuffledCards = images.sort(() => Math.random() - 0.5).map(card => card);
  const [cards, setCards] = useState<imagesType[]>(shuffledCards)
  const [msg, setMsg] = useState<string>('')

  const updateCards = (id1: number, id2: number, success: boolean): void => {
    const updatedCards = cards.map(card => {
      return [id1, id2].includes(card.id ?? -1) ?
        Object.assign(card, success ?
          { isMatched: true } :
          { isFlipped: false }
        ) :
        card
    })
    setCards(updatedCards);
    setMsg(success ? 'success' : 'wrong');
    setTimeout(() => { setMsg('') }, 2000)
  }
  useEffect(() => {
    console.log('cards: ', cards)


    const allMatched = cards.every(card => card.isMatched)
    if (allMatched) {
      // end game
    }
    const flippedImages = cards.filter(obj => obj.isFlipped && !obj.isMatched);
    console.log('cards: ', flippedImages)
    if (flippedImages.length > 1) {
      const { id: id1 } = flippedImages[0]
      const { id: id2 } = flippedImages[1]
      if (flippedImages[0].url === flippedImages[1].url) {
        updateCards(id1 ?? -1, id2 ?? -1, true)
      } else {

      }
    }
  }, [cards])

  return (<>
    <View style={styles.Cards}>
      {
        cards.map((cardObj,i) => (
          <Card key={cardObj.id+''+i} cardObj={cardObj} setCards={setCards} cards={cards} />
        ))
      }
      {msg && <View style={styles.MessageContainer}>
        <Message msg={msg} color='yellow' />
      </View>
      }
    </View>

  </>
  )
}