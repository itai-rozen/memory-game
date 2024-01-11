import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import styles from './../styles';
import FlipCard from 'react-native-flip-card';
export default function Card() {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const handleFlip = () => setIsFlipped(!isFlipped);
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
            <Image width={20} source={require('./../assets/papa.jpg')} />
          </View>
        </View>
        <View style={styles.ImageContainer}>
          <View style={styles.CardImage}>
            <Image width={100} source={require('./../assets/card-back.jpg')} />
          </View>
        </View>
      </FlipCard>
      <Text>YO</Text>
    </TouchableOpacity>

  )
}
