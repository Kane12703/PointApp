import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon} from '@rneui/base';
import colors from '../../../../../../assets/colors';

const ItemPoint = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          reverse
          reverseColor={colors.yellow}
          size={12}
          name="heartbeat"
          type="font-awesome"
          color="green"
          containerStyle={{margin:0}}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.titleName}>Tiệm cà phê Thảo Trương</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.titleTime}>Thời gian giao dịch :</Text>
          <Text style={styles.contentTime}>11:20 - 19/5/2024</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.titlePoint}>Tích điểm mua hàng :</Text>
          <Text style={styles.contentPoint}>+342</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemPoint;
