import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { ms, mvs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingHorizontal:ms(15),
    paddingTop:ms(15),
    backgroundColor:colors.white,
    position:'relative',
    alignItems:'center',

  },
  labelStylel:{
    fontSize:normalize(12),
    color:colors.black,
    marginBottom:ms(10),
    paddingTop:ms(25),

  },
  buttonContainer:{
    width:'100%',
    position:'absolute',
    bottom:ms(15),
  },
  inputContainer:{
    width:'100%'
  },
  textRegister:{
    fontSize:normalize(28),
    fontWeight:'bold',
    color:colors.black,
    paddingTop:ms(50)
  }
})
export default styles