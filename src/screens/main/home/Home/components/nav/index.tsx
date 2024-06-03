import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {Icon, normalize} from '@rneui/themed';
import colors from '../../../../../../assets/colors';

const NavHome = () => {
  return (
    <View style={styles.navContainer}>
      <View style={styles.headerNav}>
        <Text style={styles.textHeader}>Tiện ích và hỗ trợ nhanh</Text>
      </View>
      <View style={styles.lisButton}>
        <View style={styles.buttonContainer}>
          <View style={styles.icon1Container}>
            <Icon
              name="chatbubble-ellipses"
              type="ionicon"
              size={normalize(20)}
              color={colors.colorIcon_3}
            />
          </View>
          <Text numberOfLines={2} style={styles.textButton}>Quà tặng của tôi</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.icon2Container}>
            <Icon
              name="file-tray-full"
              type="ionicon"
              size={normalize(20)}
              color={colors.colorIcon_2}
            />
          </View>
          <Text numberOfLines={2}  style={styles.textButton}>Hỗ trợ kĩ thuật</Text>
        </View>
        <View style={styles.buttonContainer}>
          <View style={styles.icon3Container}>
            <Icon
              name="call"
              type="ionicon"
              size={normalize(20)}
              color={colors.colorIcon_1}
            />
          </View>
          <Text numberOfLines={2}  style={styles.textButton}>Góp ý,khiếu nại</Text>
        </View>
      </View>
    </View>
  );
};

export default NavHome;
