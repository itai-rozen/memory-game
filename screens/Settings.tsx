import {  Text, View, Platform, TouchableOpacity, ImageSourcePropType, Image, FlatList, ScrollView } from "react-native";
import styles from './../styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { imagesArr } from "../images";
import { useState, useEffect } from "react";
import * as DocumentPicker from 'expo-document-picker';
import * as FS from 'expo-file-system';

import { Asset, useAssets } from "expo-asset";
console.log('bundle dir: ', FS.bundleDirectory)
console.log('document dir: ', FS.documentDirectory)
// const [gameImages, setGameImages] = useState<any[]>([]);


export default function Settings({ navigation }: { navigation: NavigationProp<ParamListBase>}) {
  const [singleFile, setSingleFile] = useState<any|null>(null)
  const [assets, error] = useAssets(imagesArr.map(img => img.url))

  const uploadImg = async (imageName) => {
    console.log('image name: ', imageName)
    const pickedFile = await DocumentPicker.getDocumentAsync({type: 'image/jpeg'});
    console.log('picked: ', pickedFile)
  }
  useEffect(() => {
  console.log('assets: ', assets)

  }, [assets])
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <ScrollView>
      {
        imagesArr.length && imagesArr.map(img => (
          <View key={img.url}>
          <Image width={10} height={50} source={img.url} />
          <TouchableOpacity onPress={() => uploadImg(img.url)}>
            <Text style={{}}>set new image instead</Text>
          </TouchableOpacity>
          </View>
        ))
      }
      </ScrollView>
    </View>
  )
}