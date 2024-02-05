import {  Pressable,  Text, View, ImageBackground } from "react-native";
import styles from './../styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { useCardsPairStore } from "../store";
import { SelectList } from "react-native-dropdown-select-list";
import { imagesArr } from "../images";

export default function Settings({ navigation }: { navigation: NavigationProp<ParamListBase>}) {
  const setPairs = useCardsPairStore(state => state.setPairs);
  const pairs = useCardsPairStore(state => state.pairs);
  const options = imagesArr.map((_, i) => {
    return {
      key: i + 1,
      value: i + 1
    }
  })
  return (
    <View style={styles.container}>
      <Text style={{padding: 10}}>How many pairs of cards?</Text>
      <SelectList
        boxStyles={{margin: 10, width: '50%'}}
        dropdownTextStyles={{textAlign: 'right'}}
        placeholder={'How many pairs?'}
        data={options} 
        save='value'
        search={false}
        setSelected={(value : number) => setPairs(value)}
        defaultOption={{key: pairs+'', value: pairs}}
      />

      <Pressable style={styles.TextBtn} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.Text}>Start game</Text>
      </Pressable>
    </View>
  )
}