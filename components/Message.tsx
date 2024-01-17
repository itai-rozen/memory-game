import { Text } from "react-native";
import styles from './../styles'
export default function Message({ msg, color }: {msg : string, color: string}) {
  return <Text style={[styles.Message,{ color: color}]}>{msg}</Text>
}