import {StyleSheet} from 'react-native';
import colors from '../../../../../../assets/colors';
import {normalize} from '@rneui/themed';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_4,
  },
  sumPoint: {
    fontSize: normalize(18),
    color: colors.black,
  },
  titleSumPoint: {
    fontSize: normalize(18),
    color: colors.black,
  },
  sumPointContainer: {
    marginHorizontal: normalize(15),
    backgroundColor: colors.yellow,
    padding: normalize(8),
    borderRadius: 10,
    marginTop:normalize(10)
  },
  pointContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
});

export default styles;
