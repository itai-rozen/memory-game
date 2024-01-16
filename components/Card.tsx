import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { imagesType } from '../images';
import styles from './../styles';
import FlipCard from 'react-native-flip-card';
export default function Card({ imgObj, setCards }: { imgObj: imagesType, setCards: Function }) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const handleFlip = () => setIsFlipped(!isFlipped);
  // console.log('image! ', imgObj)
  return (
    <TouchableOpacity onPress={handleFlip} style={[styles.Card, styles.Shadow]}>
      <FlipCard
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isFlipped}
      >
        <View style={styles.ImageContainer}>
          <Image style={styles.Img} source={imgObj.url} />
        </View>
        <View style={styles.ImageContainer}>
          <Image style={styles.Img} source={require('./../assets/card-back.jpg')} />
        </View>
      </FlipCard>
    </TouchableOpacity>

  )
}
