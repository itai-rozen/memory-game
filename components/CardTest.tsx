import { ImageSourcePropType, View, Image, TouchableOpacity } from "react-native";
import FlipCard from "react-native-flip-card";
import styles from './../styles'

export default function CardTest({ imgKey }: { imgKey: ImageSourcePropType }) {
      {/* <FlipCard flipVertical={false} flipHorizontal={true} > */}
      {/* </FlipCard> */}

  return (<>
    <TouchableOpacity style={[styles.Card, styles.Shadow]}>
        <View style={styles.ImageContainer}>
          <Image
            source={imgKey}
            style={styles.Img}
          />
        </View>
        <View style={styles.ImageContainer}>
          <Image
            source={require('./../assets/card-back.jpg')}
            style={styles.Img}
          />
        </View>
    </TouchableOpacity>
  </>)
}