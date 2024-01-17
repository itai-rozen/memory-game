import { Button, Text } from "react-native";
import styles from './../styles'
export default function Message({ msg, color, onInit }: {msg : string, color: string, onInit: Function}) {
  return <>
    <Text style={[styles.Message,{ color: color}]}>{msg}</Text>
    {
      msg === 'again?' && <Button onPress={() => onInit()} title="Yalla" />
    }
  </>
}