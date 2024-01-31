import { Button, FlatList, Pressable, SectionListComponent, Text, View } from "react-native";
import styles from './../styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useCardsPairStore } from "../store";


export default function Settings({ navigation }: { navigation: NavigationProp<ParamListBase>}) {
  const setPairs = useCardsPairStore(state => state.setPairs);
  const pairs = useCardsPairStore(state => state.pairs);
  return (
    <View style={styles.container}>
      <Text>how many pairs?</Text>
      
      <select name="" id="" value={pairs} onChange={e => setPairs(+e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <Pressable onPress={() => navigation.navigate('Game')}>
        <Text>Start game</Text>
      </Pressable>
    </View>
  )
}