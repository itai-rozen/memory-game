import { View, Image, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { useState } from 'react';
import styles from './../styles';
import FlipCard from 'react-native-flip-card';
import images from './../images'
import type imagesType from './../images'
export default function Card({imgKey } : { imgKey: ImageSourcePropType} ) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const handleFlip = () => setIsFlipped(!isFlipped);
  console.log('image! ', imgKey)
  return (
    <TouchableOpacity onPress={handleFlip}>

      <FlipCard
        style={[styles.CardContainer, styles.Shadow]}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={isFlipped}
           >
        <View style={styles.ImageContainer}>
          <View style={styles.CardImage}>
            <Image style={styles.Img}  source={imgKey} />
          </View>
        </View>
        <View style={styles.ImageContainer}>
          <View style={styles.CardImage}>
            <Image  style={styles.Img} source={require('./../assets/card-back.jpg')} />
          </View>
        </View>
      </FlipCard>
    </TouchableOpacity>

  )
}
