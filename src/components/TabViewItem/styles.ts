import {normalize} from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../assets/colors';


const styles = StyleSheet.create ({
  container: {
    backgroundColor:'#CBE8F0',
    paddingVertical:normalize(2)
  },
  tabStyle1: {
    marginLeft:normalize(15),
    height:normalize(32),
    borderRadius:12,
    alignItems:'center',
    padding:0,
    backgroundColor:colors.white
  },
  tabStyle1Override: {
    marginRight:0,
    marginLeft:normalize(15),
   
  },
  tabStyle2Override: {
    marginLeft:0,
    marginRight:normalize(15)
  },
  tabStyle2: {
    marginRight:normalize(15),
    height:normalize(32),
    borderRadius:12,
    alignItems:'center',
    padding:0
  },
  containerTabView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleStyle1: {
    color: colors.black,
    fontSize: normalize(12),
    paddingHorizontal:0,
    fontWeight:'light'
    
  },
  titleStyle2: {
    color: colors.gray_5,
    fontSize: normalize(12),
    paddingHorizontal:0

  },
  indicatorStyle: {
    height: 3,
    backgroundColor: colors.colorIcon_3 ,
  },
});

export default styles;
