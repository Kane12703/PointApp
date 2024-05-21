import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:normalize(15),
    paddingTop:normalize(15),
    backgroundColor:colors.white,
    position:'relative',
    alignItems:'center'
  },
  labelStylel:{
    fontSize:normalize(12),
    color:colors.black,
    marginBottom:normalize(10)
  },
  buttonContainer:{
    width:'100%',
    position:'absolute',
    bottom:normalize(15),
  },
  inputContainer:{
    width:'100%'
  },
  textRegister:{
    fontSize:normalize(28),
    fontWeight:'bold',
    color:colors.black
  }
})
export default styles