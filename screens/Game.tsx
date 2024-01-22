import Card from "../components/Card";
import Message from "../components/Message";
import { View, SafeAreaView, StatusBar } from "react-native";
import styles , {AndroidSafeView} from './../styles'
import cardObjects from './../images'
import { useState, useEffect } from "react";
import type { imagesType } from "./../images";
import CardTest from "../components/CardTest";
export default function Game() {

  const [cards, setCards] = useState<imagesType[]>([])
  const [pressable, setPressabe] = useState<boolean>(true)
  const [msg, setMsg] = useState<string>('')

  const initGame = () => setCards([]);

  const updateCards = (prop : string, success : boolean, id1 : number, id2 : number|null = null) => {
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
    if (flippedImages.length > 1) {
      setPressabe(false)
      const { id: id1 } = flippedImages[0]
      const { id: id2 } = flippedImages[1]
      if (flippedImages[0].url === flippedImages[1].url) {
        updateCards('isMatched', true, id1, id2)
        popMessage('success', 2000);
      } else {
        popMessage('wrong', 2000)
        setTimeout(() => {
          updateCards('isFlipped', false, id1, id2)
        }, 2000)
      }
    } else {
      setPressabe(true)
    }
  }, [cards])

  return (<>
    <SafeAreaView style={[styles.Cards, AndroidSafeView]}>
      {
        cards.map((cardObj) => (
          <Card key={cardObj.id} pressable={pressable}  cardObj={cardObj} setCards={setCards} cards={cards} />
        ))
      }
      {
      msg && (
        <View style={styles.MessageContainer}>
          <Message msg={msg} color='yellow' onInit={initGame} />
        </View>
      )}
    </SafeAreaView>

  </>
  )
}