import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: normalize(14),
    fontWeight: '400',
    lineHeight: normalize(20),
    borderWidth: 0,
    paddingBottom: 0,

  },
  container: {
    borderWidth: normalize(1),
    borderRadius: normalize(6),
    borderColor:colors.gray_3,
    backgroundColor: colors.white,
    justifyContent:'center',
    height:normalize(45)
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    
  },
});

export default styles;