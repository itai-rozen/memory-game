import { Text } from "react-native";

export default function Message({ msg, color }: {msg : string, color: string}) {
  return <Text style={{color: color}}>{msg}</Text>
}