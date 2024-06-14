import { StyleSheet } from 'react-native';

import { normalize } from '@rneui/themed';
import colors from '../../../../../../assets/colors';

const styles = StyleSheet.create({

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:normalize(15),
  
  },
  inforUser:{
    marginLeft:normalize(8),
  },
  nameUser:{
    color:colors.blue_1,
    fontSize:normalize(18),
    fontWeight:'400',

  },
  phoneNumber:{
    color:colors.black,
    fontSize:normalize(14),
  },
  inforContainer:{
    flexDirection:'row'
  },
  pointContainer:{
    backgroundColor:colors.yellow,
    borderRadius:normalize(5),
    padding:normalize(5)
  },
  charityPoint:{

  },
  point:{
   
  },
  titlePoint:{
    color:colors.black,
    fontSize:normalize(12),
  },
  numberPoint:{
    color:colors.black,
    fontSize:normalize(14),
    fontWeight:'500'
  },
  qrCodeContainer:{
    alignItems:'center',
    marginTop:normalize(15),
    borderColor:colors.gray_3,
    borderWidth:1,
    marginHorizontal:normalize(15),
    paddingVertical:normalize(15),
    borderRadius:8,
    backgroundColor:colors.white
   

  },
  describeQr:{
    color:'gray',
    fontSize:normalize(13),
    marginBottom:normalize(5)
    
   
  },
  headerContainer:{
    paddingTop:normalize(50),
    paddingBottom:normalize(15)

  }

});


export default styles