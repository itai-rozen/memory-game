import Card from "../components/Card";
import Message from "../components/Message";
import { View, SafeAreaView, StatusBar } from "react-native";
import styles , {AndroidSafeView} from './../styles'
import { getImages } from './../images'
import { useState, useEffect } from "react";
import type { imagesType, messageType } from "./../types";
import CardTest from "../components/CardTest";
import { useCardsPairStore } from "../store";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
export default function Game({navigation} : {navigation: NavigationProp<ParamListBase>}) {

  const [cards, setCards] = useState<imagesType[]>([]);
  const [pressable, setPressabe] = useState<boolean>(true);
  const [msg, setMsg] = useState<messageType>(undefined);

  const pairs = useCardsPairStore(state => state.pairs);

  const initGame = () => {
    setCards([]);
    setMsg(undefined);
  }

  const updateCards = (prop : string, success : boolean, id1 : number, id2 : number) => {
    const cardIds = [id1,id2];
    const updatedCards = cards.map(card => {
      return cardIds.includes(card.id) ? Object.assign(card, {[prop] : success}) : card
    }) 
    setCards(updatedCards)
  }

  const popMessage = (message : messageType, interval: number) => {
    setMsg(message)
    setTimeout(() => {
      setMsg(undefined)
    }, interval)
  }

  const checkWin = () => cards.length > 0 && cards.every(card => card.isMatched)

  useEffect(() => {
    // start game
    if (!cards.length)
      setCards(getImages(pairs).sort(() => Math.random() - 0.5))

    // end game
    if (checkWin()) {
      setMsg('win')
      return
    }
    const flippedImages = cards.filter(obj => obj.isFlipped && !obj.isMatched);
    if (flippedImages.length > 1) {
      setPressabe(false)
      const { id: id1, url: url1 } = flippedImages[0]
      const { id: id2, url: url2 } = flippedImages[1]
      if (url1 === url2) {
        updateCards('isMatched', true, id1, id2)
        if (checkWin()) {
          setMsg('win')
          return
        } else 
          popMessage('success', 2000);
      } else {
        popMessage('fail', 2000)
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
          <Message msg={msg} color='yellow' onInit={initGame} navigation={navigation} />
        </View>
      )}
    </SafeAreaView>

  </>
  )
}