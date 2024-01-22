import { StyleSheet, Platform, StatusBar } from "react-native";

const globals = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 30, 
  },

  Card: {
    width: '17%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: 'grey',
    margin: 4,
    // To prevent shadow from overflowing 
    overflow: 'hidden',
  },
  Shadow: {
    shadowColor: '#fff',
  shadowOpacity: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height:15 },
  },
  ImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Img : {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 4
  },
  Cards: {
    backgroundColor: 'purple',
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-start',
    flexWrap: 'wrap',
    width:'100%',
    height:'100%',
    position:'relative'
  },
  MessageContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height:'100%',
  },
  Message: {
    fontSize: 60,
  },
  HomeBtn: {
    width: '70%',
    margin: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default globals;

export const AndroidSafeView = {
  paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0
}