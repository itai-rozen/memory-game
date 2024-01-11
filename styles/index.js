import { StyleSheet } from "react-native";

const globals = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30,
  },

  Card: {
    width: 300,
    height: 200,
    borderRadius: 30,
    backgroundColor: 'grey',

    // To prevent shadow from overflowing 
    overflow: 'hidden',
  },
  Shadow: {
    shadowColor: 'red',
    shadowOpacity: 1,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 0 },
  },
  ImageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  CardImage: {
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderRadius: 4,
  },
})

export default globals;