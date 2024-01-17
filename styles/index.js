import { StyleSheet } from "react-native";

const globals = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
    margin: 30, 
  },
  CardContainer: {
    margin: 5,
    height: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  Card: {
    width: 100,
    height: 200,
    borderRadius: 10,
    backgroundColor: 'grey',
    margin: 4,
    // To prevent shadow from overflowing 
    overflow: 'hidden',
  },
  Shadow: {
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height:0 },
  },
  ImageContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',

  },
  CardImage: {
    width: 100,
    height: 200,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',

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
  }
})

export default globals;