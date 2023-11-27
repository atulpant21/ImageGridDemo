import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main_view: {
    flex:1, 
  },
  item_view: {
    flexDirection: "row",
    flex: 1,
    margin : 2,
  },
  item_title: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
    padding:4
  },
  image: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  overlay_view: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderRadius: 10,
   
  }
})