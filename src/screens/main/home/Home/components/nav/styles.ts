import { StyleSheet } from 'react-native';
import { normalize } from '@rneui/themed';
import colors from '../../../../../../assets/colors';
import { Device } from '../../../../../../utils/device';
import { s,vs,ms, mvs } from 'react-native-size-matters';
const WIDTH = Device.getDeviceWidth();


const styles = StyleSheet.create({
  navContainer:{
    paddingHorizontal:normalize(15)
  },
  headerNav:{

  },
  textHeader:{
    fontSize:normalize(16),
    color:colors.black_1,
    paddingVertical:normalize(10)
  
  },
  lisButton:{
    flexDirection:'row',
    justifyContent:'space-between',
  
  },
  icon1Container:{
    backgroundColor:'#EFFCF5',
    padding:normalize(10),
    borderRadius:10,
    marginBottom:normalize(5),
  },
  icon2Container:{
    backgroundColor:'#EDFDFC',
    padding:normalize(10),
    borderRadius:10,
    marginBottom:normalize(5),
  },
  icon3Container:{
    backgroundColor:'#FBEBEB',
    padding:normalize(10),
    borderRadius:10,
    marginBottom:normalize(5),
  },
  buttonContainer:{
    alignItems:'center',
    width:WIDTH/3-normalize(30)
  },
  textButton:{
    fontSize:normalize(10),
    color:colors.black_1,
   
  }

});


export default styles