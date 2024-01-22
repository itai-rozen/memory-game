import { View, Image, Text, TouchableOpacity } from 'react-native';
import { imagesType } from '../images';
import styles from './../styles';
import FlipCard from 'react-native-flip-card';
export default function Card({ cardObj, setCards, cards }:
  { cardObj: imagesType, setCards: Function, cards: imagesType[] }) {

  const handleFlip = () => {
    if (cardObj.isMatched)
      return;
    const updatedCards = cards.map(card => {
      if (card.id === cardObj.id) {
        card.isFlipped = !card.isFlipped
      }
      return card
    })
    setCards(updatedCards)
  }
  return (
    <TouchableOpacity style={[styles.Card, styles.Shadow]} onPress={handleFlip}>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        clickable={false}
        flip={cardObj.isFlipped}
      >
        <View style={styles.ImageContainer}>
          <Image style={styles.Img} source={require('./../assets/card-back.jpg')} />
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.Img} source={cardObj.url} />
        </View>

      </FlipCard>
    </TouchableOpacity>
  )
}
