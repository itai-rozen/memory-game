import { Button, Text, Image, ImageSourcePropType } from "react-native";
import { gameStatus } from "../images";
import styles from './../styles'
export default function Message({ msg, color, onInit }: {msg : 'win'|'success'|'fail', color: string, onInit: Function}) {
  return <>

    <Text style={[styles.Message,{ color: color}]}>
      {msg}
      <Image
        source={gameStatus[msg]}
      />
    </Text>
    {
      msg === 'win' && <Button onPress={() => onInit()} title="Yalla" />
    }
  </>
}