import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { normalize } from '@rneui/themed';
import { fontFamilySetup } from '../../utils/font';
import { ms } from 'react-native-size-matters';

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection:'row',
    height:ms(45),
    width:'100%',
    backgroundColor: colors.yellow,
    borderRadius: 8,
    alignItems:'center',
    justifyContent:'center',
  },
  titleStyle:{
    color: colors.black,
    fontSize: normalize(15),
    fontFamily:fontFamilySetup.bold
  }
})
export default styles