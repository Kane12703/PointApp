import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AvatarCustom} from '../../../../components';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import { normalize } from '@rneui/themed';
import { ExploreImage } from '../../../../assets/svg';
import { images } from '../../../../assets/images';

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={ images.backgroundHeader} style={styles.headerContainer}>
      <View style={styles.header}>
        <View style={styles.inforContainer}>
          <AvatarCustom />
          <View style={styles.inforUser}>
            <Text style={styles.nameUser}>Đình Thảo</Text>
            <Text style={styles.phoneNumber}>0858005639</Text>
          </View>
        </View>
        <View style={styles.pointContainer}>
          <View style={styles.point}>
            <Text style={styles.titlePoint}>
              Điểm : <Text style={styles.numberPoint}> 62.111</Text>
            </Text>
          </View>
          <View style={styles.point}>
            <Text style={styles.titlePoint}>
              Điểm TT : <Text style={styles.numberPoint}>131.1</Text>{' '}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.qrCodeContainer}>
        <Text style={styles.describeQr}>
          Đưa mã này cho nhân viêm để tính điểm
        </Text>
        <QRCode
          value="Just some string value"
          size={normalize(150)}
        />
      </View>
      </ImageBackground>
    </View>
  );
};

export default Home;
