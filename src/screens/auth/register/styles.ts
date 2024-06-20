import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { ms, mvs} from 'react-native-size-matters';
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

  },
  buttonContainer:{
    marginTop:ms(15)
  },
  inputContainer:{
    width:'100%'
  },
  textRegister:{
    fontSize:normalize(28),
    fontWeight:'bold',
    color:colors.black,
    paddingTop:ms(50)
  },
  loginOther:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:ms(15)
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
})
export default styles