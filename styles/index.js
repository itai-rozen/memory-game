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
    height: '18%',
    borderRadius: 10,
    margin: 4,
    // To prevent shadow from overflowing 
    overflow: 'hidden',
  },
  Shadow: {
    shadowColor: '#fff',
    shadowOpacity: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 5 },
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
    borderRadius: 4,
    backgroundColor:'#fff'
  },
  Cards: {
    backgroundColor: 'purple',
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
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
    zIndex: 1,
  },
  MessageWrapper: {
    backgroundColor: '#000',
    padding: 30,
    borderRadius: 14,
    borderWidth: 5,
    borderColor: 'gold',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
  },
  TextBtn: {
    backgroundColor: 'gold',
    paddingHorizontal: 6,
    paddingVertical: 6,
    margin: 3,
    shadowColor: '#fff',
    shadowOpacity: 10,
    shadowRadius: 15,
    shadowOffset: { width: 1, height: 5 },
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  Text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10
  }
})

export default globals;

export const AndroidSafeView = {
  paddingTop: (Platform.OS === 'android') ? StatusBar.currentHeight : 0
}