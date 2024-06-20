import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {AvatarCustom} from '../../../../components';
import styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import { normalize } from '@rneui/themed';
import { ExploreImage } from '../../../../assets/svg';
import { images } from '../../../../assets/images';
import HeaderHome from './components/header';
import NavHome from './components/nav';

const Home = () => {
  return (
    <View style={styles.container}>
      <HeaderHome/>
      <NavHome/>
    </View>
  );
};

export default Home;
