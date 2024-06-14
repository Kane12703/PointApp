import { StyleSheet } from 'react-native'
import { ms, vs } from 'react-native-size-matters'
import colors from '../../assets/colors'
import { normalize } from '@rneui/themed'
import { fontFamilySetup } from '../../utils/font'


const styles = StyleSheet.create({
  btnLoginGoogle:{
    flexDirection:'row',
    width:'100%',
    height:vs(40),
    alignItems:'center',
    backgroundColor:colors.white,
    justifyContent:'center',
    borderColor:colors.gray,
    borderWidth:0.5,
    borderRadius:100
  
  },
  textLoginGoogle:{
    fontSize:normalize(15),
    color:colors.black,
    fontFamily:fontFamilySetup.medium,
    paddingHorizontal:normalize(5)
  },
  
})

export default styles