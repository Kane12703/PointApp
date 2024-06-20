import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { ms, mvs, vs} from 'react-native-size-matters';
import { fontFamilySetup } from '../../../utils/font';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:ms(15),
    paddingTop:ms(15),
    backgroundColor:colors.white,
    alignItems:'center',

  },
  labelStylel:{
    fontSize:normalize(12),
    color:colors.black,
    marginBottom:ms(10),
    paddingTop:ms(25),
    fontFamily:fontFamilySetup.medium

  },
  buttonContainer:{
    marginTop:ms(20)
  },
  inputContainer:{
    width:'100%'
  },
  textLogin:{
    fontSize:normalize(28),
    color:colors.black,
    paddingTop:ms(50),
    fontFamily:fontFamilySetup.bold
  },
  forgetContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:ms(10)
  },
  textForget:{
    fontSize:normalize(12),
    color:colors.yellow,
    fontFamily:fontFamilySetup.bold
  },
  textRemember:{
    fontSize:normalize(12),
    color:colors.gray,
    fontFamily:fontFamilySetup.medium,
  },
  loginOther:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:normalize(35)
  },
  textLoginOther:{
    fontSize:normalize(12),
    color:colors.gray,
    fontFamily:fontFamilySetup.medium,
    paddingHorizontal:normalize(5)
  },
  viewUnderLine:{
    height:0.5,
    backgroundColor: colors.gray_3,
    flex:1
  },
  rememberContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:normalize(20)
  }
})
export default styles