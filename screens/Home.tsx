import { View, Text, TouchableOpacity } from 'react-native';
import styles from './../styles';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export default function Home({ navigation }: { navigation: NavigationProp<ParamListBase> }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.HomeBtn} onPress={() => navigation.navigate('Game')} >
        <Text style={{fontSize: 24}}>Start Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.HomeBtn} onPress={() => navigation.navigate('Settings')} >
        <Text style={{fontSize: 24}}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
} 