import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {ms, mvs, s, vs} from 'react-native-size-matters';
import {fontFamilySetup} from '../../../../../utils/font';
import colors from '../../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontFamily: fontFamilySetup.bold,
    fontWeight: 'bold',
    fontSize: normalize(25),
    color: colors.black,
    marginLeft: ms(16),
    marginVertical: ms(18),
  },
  viewDataEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: normalize(163),
    height: normalize(163),
    marginBottom: ms(22),
  },
  textNotificationEmpty: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(19),
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: ms(30),
  },
  btnReload: {
    width: s(296),
    height: vs(44),
    backgroundColor: '#ffbf00',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(12),
  },
  textReload: {
    fontFamily: fontFamilySetup.bold,
    fontSize: normalize(16),
    fontWeight: '600',
    color: colors.black,
  },
});

export default styles;
