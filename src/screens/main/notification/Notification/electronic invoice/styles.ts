import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {ms, mvs, vs} from 'react-native-size-matters';
import {fontFamilySetup} from '../../../../../utils/font';
import colors from '../../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontFamily: fontFamilySetup.bold,
    fontWeight: 'bold',
    fontSize: normalize(25),
    color: colors.black,
    marginLeft: ms(16),
    marginVertical: ms(18),
  },
});

export default styles;
