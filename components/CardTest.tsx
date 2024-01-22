import { Animated, View, Image, TouchableOpacity } from "react-native";
import styles from './../styles'
import { imagesType } from "../images";

export default function CardTest({ cardObj, setCards, cards }: { cardObj: imagesType, cards: imagesType[], setCards: Function }) {
  const handleFlip = () => {
    if (cardObj.isMatched)
      return;
    console.log('fkuo')
    const cardsCopy = cards.map(card => { return { ...card } })
    const updatedCards = cardsCopy.map(card => {
      if (card.id === cardObj.id) {
        card.isFlipped = !card.isFlipped
      }
      return card
    })
    setCards(updatedCards)
  }
  return (<>
    <TouchableOpacity style={[styles.Card, styles.Shadow]} onPress={handleFlip}>
      {
        cardObj.isFlipped ? <>
          <View style={[styles.ImageContainer]}>
            <Image
              source={cardObj.url}
              style={styles.Img}
            />
          </View>
        </> : <>
          <View style={styles.ImageContainer}>
            <Image
              source={require('./../assets/card-back.jpg')}
              style={styles.Img}
            />
          </View>
        </>
      }
    </TouchableOpacity>
  </>)
}