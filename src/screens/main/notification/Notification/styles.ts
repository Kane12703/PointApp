import {normalize} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import colors from '../../../../assets/colors';
import {fontFamilySetup} from '../../../../utils/font';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray_6,
  },
  title: {
    fontFamily: fontFamilySetup.bold,
    fontWeight: 'bold',
    fontSize: normalize(25),
    color: colors.black,
    marginLeft: ms(12),
    marginTop: ms(30),
    marginBottom: ms(9),
  },
  tabBar: {
    height: vs(36),
    backgroundColor:colors.gray_6,
    borderBottomWidth:0,
    shadowColor:'#fff'
   
  },
  tabBarLabel: {
    textTransform: 'none',
    fontSize: normalize(13),
    fontFamily: fontFamilySetup.semi_bold,
  },
  tabBarIndicator: {
    backgroundColor: colors.yellow,
  },
  tabBarItem: {},
});

export default styles;
