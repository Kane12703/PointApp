import { normalize } from '@rneui/themed';
import { StyleSheet } from 'react-native';
import colors from '../../../../../../assets/colors';

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginHorizontal:normalize(15),
    backgroundColor:colors.white,
    paddingHorizontal:normalize(5),
    paddingVertical:normalize(8),
    borderRadius:10
  },
  contentContainer:{
    flex:1,

  },
  titleName:{
    color:colors.blue_1,
    fontSize:normalize(13),
    paddingBottom:normalize(5)
  },
  titleTime:{
    color:'gray',
    fontSize:normalize(10),
    paddingBottom:normalize(5)
  },
  titlePoint:{
    color:colors.blue_2,
    fontSize:normalize(13),
    paddingBottom:normalize(5)
  },
  contentTime:{
    color:'gray',
    fontSize:normalize(10),
  },
  timeContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  pointContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
  contentPoint:{
    color:colors.colorIcon_3,
    fontSize:normalize(15),
  },
  iconContainer:{
    paddingRight:normalize(8)
  }
})

export default styles