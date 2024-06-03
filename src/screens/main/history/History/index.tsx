import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabViewItem from '../../../../components/TabViewItem';
import styles from './styles';
import ListPoint from './components/listPoint';
import ListOrder from './components/listOder';
import { normalize } from '@rneui/themed';
import colors from '../../../../assets/colors';
styles;

const History = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, paddingTop: normalize(80),backgroundColor:'#D7F9FA'}}>
        <TabViewItem
          title1={'Tính điểm / Dùng điểm'}
          title2={'Đơn hàng'}
          screen1={<ListPoint />}
          screen2={<ListOrder />}
        />
      </View>
    </View>
  );
};

export default History;
