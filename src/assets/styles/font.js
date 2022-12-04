import { StyleSheet } from 'react-native'
import { px13, px15, px14, px12, button, headline4, headline5, headline6, caption, body1, body2 } from './size'
import { scale } from '../../helper/scaling'
import { CError,CSuccess } from './colors'
import { useFonts } from 'expo-font'

const standardFont = px13
const standardFontTitle = px15
const padding = scale(10)
const buttonSize = button


const font = StyleSheet.create({
  Lato : {
    color : '#000000',
    fontFamily : 'Lato-Regular' ,
    fontSize : standardFont,
  },
  LatoSemibold : {
    color : '#000000',
    fontFamily : 'Lato-Semibold',
    fontWeight: '600',
    fontSize : standardFont,
  },
  LatoBold : {
    color : '#000000',
    fontFamily : 'Lato-Bold',
    fontSize : standardFont,
  },
  LatoItalic : {
    color : '#000000',
    fontFamily : 'Lato-Italic',
    fontSize : standardFont,
  },
  LabelNotes: { 
    fontFamily : 'Lato-Bold',
    fontSize : px15,
    color: '#000000',
  },  
  TextNotes: {
    fontFamily : 'Lato-Regular',
    fontSize : px12,
    color: "#595959",
  },

  LatoButton:{
    fontFamily : 'Lato-Regular',
    fontWeight: '500',
  },

  LatoHeadline4:{
    fontFamily : 'Lato-Regular',
    fontSize : headline4,
  },

  LatoHeadline5:{
    fontFamily : 'Lato-Regular',
    fontSize : headline5
  },
  LatoHeadline5Bold:{
    fontFamily : 'Lato-Bold',
    fontSize : headline5
  },
  LatoHeadline6:{
    fontFamily : 'Lato-Regular',
    fontSize : headline6
  },

  LatoBody1:{
    fontFamily : 'Lato-Regular',
    fontSize : body1,
  },
  LatoBody1Bold:{
    fontFamily : 'Lato-Bold',
    fontSize : body1,
  },

  LatoBody2:{
    fontFamily : 'Lato-Regular',
    fontSize : body2,
  },

  LatoTitleBold:{
    fontFamily : 'Lato-Bold',
  },

  LatoCaption: {
    fontFamily : 'Lato-Regular',
    fontSize : caption,
  },
  TextPopUp : {
    color : '#000000',
    fontFamily : 'Lato-Regular',
    fontSize : standardFont,
    paddingVertical : 0
  },
  TextError : {
    color : CError,
    fontFamily : 'Lato-Semibold',
    fontSize : standardFont,
    paddingVertical : padding
  },
  TextSuccess : {
    color : CSuccess,
    fontFamily : 'Lato-Semibold',
    fontSize : standardFont,
    paddingVertical : padding
  },
  ErrMsg : {
    color : '#ffffff',
    fontSize : px13,
    textAlign : 'center',
    fontFamily : 'OpenSans-Regular'
  }
})


export default font 