import { View, Button } from 'react-native';
import styles from './../styles';

export default function Home({ navigation } : { navigation: NavigationTimingType}) {
  return (
  <View style={styles.container}>
    <Button title="Start Game" onPress={() => navigation.navigate('Game')} />
    <Button title="Settings" />
  </View>
  )
} 