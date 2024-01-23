import {  Text, View, Platform, TouchableOpacity } from "react-native";
import styles from './../styles'
import { NavigationProp, ParamListBase } from "@react-navigation/native";
import { imagesArr } from "../images";
import { useState, useEffect, FormEvent } from "react";
import * as FS from 'expo-file-system'
import * as DocumentPicker from 'react-native-document-picker';
console.log('document: ', FS.bundleDirectory)
// const [gameImages, setGameImages] = useState<any[]>([]);


export default function Settings({ navigation }: { navigation: NavigationProp<ParamListBase>}) {
  const [singleFile, setSingleFile] = useState<any|null>(null)
  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [Platform.OS === 'ios' ? 'public.jpg' : 'image/jpeg'],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const uploadImage = async () => {
    // Check if any file is selected or not
    if (singleFile != null) {
      // If file selected then create FormData
      const fileToUpload = singleFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      let res = await fetch(
        'http://localhost/upload.php',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
    }
  };

  return (
    <View style={styles.container}>
      {singleFile != null ? (
        <Text >
          File Name: {singleFile.name ? singleFile.name : ''}
          {'\n'}
          Type: {singleFile.type ? singleFile.type : ''}
          {'\n'}
          File Size: {singleFile.size ? singleFile.size : ''}
          {'\n'}
          URI: {singleFile.uri ? singleFile.uri : ''}
          {'\n'}
        </Text>
      ) : null}
            <TouchableOpacity
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text>Select File</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={uploadImage}>
        <Text>Upload File</Text>
      </TouchableOpacity>
    </View>
  )
}