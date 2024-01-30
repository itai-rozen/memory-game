import {  Text, View, Platform, TouchableOpacity, ImageSourcePropType, Image, FlatList, ScrollView } from "react-native";
import styles from './../styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { imagesArr } from "../images";
import { useState, useEffect } from "react";
import * as DocumentPicker from 'expo-document-picker';
import * as FS from 'expo-file-system';
import { Asset, useAssets } from "expo-asset";
// console.log('bundle dir: ', FS.getInfoAsync(FS.bundleDirectory as string).then(dir => console.log('dir: ', dir)).catch(err => console.log('err: ', err)))
// console.log('document dir: ', FS.readDirectoryAsync(FS.documentDirectory as string).then(dir => console.log('dir: ', dir)))
// const [gameImages, setGameImages] = useState<any[]>([]);


export default function Settings({ navigation }: { navigation: NavigationProp<ParamListBase>}) {
  const [singleFile, setSingleFile] = useState<any|null>(null)
  const [assets, error] = useAssets(imagesArr.map(img => img.url))
  const [formattedImgs, setFormattedImgs] = useState<any[]>([])

  const uploadImg = async (assetIdx : number) => {
    const asset = Array.from(assets as Iterable<Asset>)[assetIdx]
    console.log('asset: ', asset)
    const pickedFile = await DocumentPicker.getDocumentAsync({type: 'image/jpeg'});
    if (!pickedFile.canceled) {
      if (pickedFile?.assets){
        try {
          await FS.moveAsync({from: pickedFile.assets[0].uri, to: '../assets/game-images/4.jpg'})
        } catch(err) {
          console.log('err copying file: ', err)
        }
      }
    }
  }
  const imgObj = {
    "downloaded": true,
    "downloading": false,
    "hash": "d514d21f7db57f6088ae074bfbcbf88b",
    "height": 640,
    "imageUrl": 3,
    "localUri": "file:///data/user/0/host.exp.exponent/cache/ExponentAsset-d514d21f7db57f6088ae074bfbcbf88b.jpg",
    "name": "1",
    "type": "jpg",
    "uri": "http://10.0.0.3:19000/assets/assets/game-images/1.jpg?platform=android&hash=d514d21f7db57f6088ae074bfbcbf88b?platform=android&dev=true&hot=false&strict=false&minify=false",
    "width": 640,
  }
  useEffect(() => {
  if (assets && assets?.length > 0) {
    // const formatted =  Array.from(assets as Iterable<Asset>).map((asset, i) => {
    //   return {...asset, imageUrl : imagesArr[i].url }
    // })
    // setFormattedImgs(formatted)
    // console.log('image: ', formatted[0])
  }
  }, [assets])
  return (
    <View style={styles.container}>
      <Text>hi</Text>
      <ScrollView>
      {
        imagesArr.length && imagesArr.map((img,i) => (
          <View key={img.url}>
          <TouchableOpacity onPress={() => uploadImg(i)}>
            <Image style={{resizeMode:'contain', width: 50, height: 100}}  source={img.url as ImageSourcePropType} />
            <Text style={{}}>set new image instead</Text>
          </TouchableOpacity>
          </View>
        ))
      }
      </ScrollView>
    </View>
  )
}