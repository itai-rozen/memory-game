import { Button, FlatList, Text, View } from "react-native";
import styles from './../styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native";


export default function Settings({ navigation }: { navigation: NavigationProp<ParamListBase>}) {
  return (
    <View style={styles.container}>
      <Text>hi</Text>
    </View>
  )
}