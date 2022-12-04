import { StyleSheet } from 'react-native'
import { scale } from '../../helper/scaling';

export default StyleSheet.create({
  ContainerUpload : {
    flexDirection:'row', 
    paddingVertical:scale(10)
  },
  shadow : {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})