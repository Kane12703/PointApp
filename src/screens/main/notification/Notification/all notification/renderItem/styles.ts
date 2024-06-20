import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {ms, mvs, s, vs} from 'react-native-size-matters';
import {fontFamilySetup} from '../../../../../../utils/font';
import colors from '../../../../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(16),
    color: '#003494',
    marginBottom: ms(6),
  },
  description: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(12),
    color: colors.gray,
  },
  viewRow: {
    flexDirection: 'row',
    marginTop: ms(9),
    marginBottom: ms(6),
  },
  image: {
    width: s(36),
    height: vs(36),
    borderRadius: normalize(100),
    alignSelf: 'flex-end',
    marginBottom: ms(25),
  },
  content: {
    backgroundColor: colors.white,
    marginLeft: ms(9),
    paddingHorizontal: ms(12),
    paddingVertical: ms(15),
    borderRadius: normalize(16),
  },
  time: {
    fontFamily: fontFamilySetup.thin,
    fontSize: normalize(8),
    color: colors.gray,
    marginLeft: ms(30),
    marginTop: ms(12),
  },
});

export default styles;
