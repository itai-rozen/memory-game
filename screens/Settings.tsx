import { Button, FlatList, Text, View } from "react-native";
import styles from './../styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { imagesArr } from "../images";
import { useState, useEffect } from "react";
import * as FS from 'expo-file-system'
const imagesDir:string|null = '';
console.log('document: ', FS.bundleDirectory)
// const [gameImages, setGameImages] = useState<any[]>([]);


export default function Settings({ navigation }: { navigation: NavigationProp<ParamListBase>}) {
  async function readFiles() {
    try {

      const reader = await FS.getInfoAsync('asset://');
      console.log('reader: ', reader)
    }catch(err) {
      console.log('err reading: \n', err)
    }
  
    // setGameImages(reader);
  }
  useEffect(() => {
    // if (!gameImages.length) {
      readFiles()
    // }
  }, [])
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      {/* <FlatList data={gameImages} renderItem={() => { */}
        {/* return <Image sou /> */}
      {/* }}/> */}
    </View>
  )
}