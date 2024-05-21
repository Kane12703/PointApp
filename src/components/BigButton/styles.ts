import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';
import { normalize } from '@rneui/themed';

const styles = StyleSheet.create({
  buttonStyle: {
    height:normalize(45),
    backgroundColor: colors.yellow,
    borderRadius: 8
  },
  titleStyle:{
    color: colors.black,
    fontSize: normalize(15),
    fontWeight:'500'
  }
})
export default styles