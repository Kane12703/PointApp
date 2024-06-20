import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import {  ms, vs} from 'react-native-size-matters';
import { fontFamilySetup } from '../../../utils/font';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:ms(15),
    backgroundColor:colors.white,

  },
  textForgot:{
    fontSize:normalize(28),
    color:colors.black,
    paddingTop:ms(50),
    fontFamily:fontFamilySetup.bold
  },
  labelStylel:{
    fontSize:normalize(12),
    color:colors.black,
    marginBottom:ms(10),
    paddingTop:ms(25),
    fontFamily:fontFamilySetup.bold

  },
  inputContainer:{
    width:'100%',
  },
  textDer:{
    fontSize:normalize(12),
    color:colors.black,
    fontFamily:fontFamilySetup.medium,
    paddingVertical:ms(20)

  },
  buttonContainer:{
    width:'100%',
    marginTop:ms(20),
    position:'absolute',
    bottom:ms(50),
    alignSelf:'center'
    
  },
  buttonStyle:{

  }

  
})
export default styles