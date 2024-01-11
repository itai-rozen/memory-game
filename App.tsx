import {  Text, View } from 'react-native';
import styles from './styles'
import Game from './screens/Game';

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
    </View>
  );
}


