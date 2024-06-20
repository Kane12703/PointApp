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
    alignItems:'center',
  },
  titleStyle:{
    fontFamily:fontFamilySetup.medium,
  },

  buttonRegister:{
    marginTop:ms(20),
    borderRadius:100,
    height:vs(42),
    borderColor:colors.gray,
    borderWidth:0.5,
    
  },
  buttonLogin:{
    marginVertical:ms(20),
    borderRadius:100,
    height:vs(42),
    backgroundColor:colors.yellow,
    borderColor:colors.gray,
    borderWidth:0.5,
   
  },
  buttonContainer:{
    width:'100%',
    position:'absolute',
    bottom:ms(50)
  },
  imgStyle:{
    width:'100%',
    height:vs(300)
  },
  textStyle:{
    fontFamily:fontFamilySetup.bold,
    fontSize:normalize(15),
    color:colors.black,
 
  }
  
})
export default styles