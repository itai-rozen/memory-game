import {  Text, Image, Animated, Pressable } from "react-native";
import { gameStatus } from "../images";
import { messageType } from "../types";
import styles from './../styles'
import { useEffect, useRef } from "react";
import { NavigationProp, ParamListBase } from "@react-navigation/native";
export default function Message({ msg, color, onInit, navigation }: {msg : messageType, color: string, onInit: Function, navigation: NavigationProp<ParamListBase>}) {
 const offsetX = useRef(new Animated.Value(-999)).current;
 const fadeIn = useRef(new Animated.Value(0)).current;

 useEffect(() => {
  Animated.timing(offsetX, {toValue: 0, useNativeDriver: true}).start();
  if (msg !== 'win') {
    setTimeout(() => {
      Animated.timing(offsetX, {toValue: 999,  useNativeDriver: true}).start();
    }, 1500)
  } else {
    Animated.timing(fadeIn, {toValue: 1, delay: 500, useNativeDriver: true}).start();
  }
 }, [])

 return <Animated.View style={[styles.MessageContainer, {transform: [{translateX: offsetX}]} ]}>

    <Text style={[styles.Message,{ color: color}]}>
      {msg}
    </Text>
    {msg &&<Image style={ msg === 'win' ? {width: 200, height: 200} : {}} source={gameStatus[msg]} /> }
    {
      msg === 'win' && <Animated.View style={{opacity: fadeIn}}>
        <Pressable style={styles.TextBtn} onPress={() => onInit()} ><Text>Play again</Text></Pressable>
        <Pressable style={styles.TextBtn} onPress={() => navigation.navigate('Home')} ><Text>Exit</Text></Pressable>
      </Animated.View>
    }
  </Animated.View>
}