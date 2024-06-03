import {StyleSheet} from 'react-native';
import {ms} from 'react-native-size-matters';
import colors from '../../../assets/colors';
import { normalize } from '@rneui/themed';
import { fontFamilySetup } from '../../../utils/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.white,
    paddingTop:ms(50),
    paddingHorizontal:ms(15)
  },
  textVerify:{
    fontSize:normalize(28),
    fontFamily:fontFamilySetup.bold,
    color:colors.black
  },
  textDescribe:{
    marginTop:ms(20),
    fontSize:normalize(12),
    fontFamily:fontFamilySetup.medium,
    color:colors.black
  },
  btnSubmit:{
    position:'absolute',
    bottom:ms(15),
    width:'100%'
  },
  otpContainerStyle:{
   
  },
  textTime:{
    fontSize:normalize(15),
    color:colors.yellow,
    fontFamily:fontFamilySetup.variable,
    marginBottom:ms(20)
  },
  inputOtpConTainer:{
    alignItems:'center',
    marginTop:ms(60)
  },
  textNoSendOtp:{
    fontSize:normalize(12),
    fontFamily:fontFamilySetup.medium,
    color:'gray',
  },
  textReSend:{
    fontSize:normalize(12),
    fontFamily:fontFamilySetup.bold,
    color:colors.yellow
  },
  ReSendContainer:{
    marginTop:ms(20),
    flexDirection: 'row', 
    alignItems: 'center'
  },
  emailSend:{
    fontSize:normalize(12),
    fontFamily:fontFamilySetup.bold,
    color:colors.black
  }
});

export default styles;
