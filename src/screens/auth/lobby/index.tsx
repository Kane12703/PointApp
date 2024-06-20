import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BigButton, ButtonGoogle} from '../../../components';
import {NavigationService} from '../../../navigation/NavigationService';
import {routes} from '../../../constants';
import {images} from '../../../assets/images';

const Lobby = () => {
  return (
    <View style={styles.container}>
      <Image
        source={images.wellcome}
        resizeMode="contain"
        style={styles.imgStyle}
      />
 
      <Text style={styles.textStyle}>
        Chào mừng đến với app tích điểm của chuỗi cafe
      </Text>
      <View style={styles.buttonContainer}>
        <ButtonGoogle title="Đăng nhập bằng google" />
        <BigButton
          containerStyle={styles.buttonRegister}
          onPressButton={() => NavigationService.navigate(routes.SIGN_IN)}
          textStyle={styles.titleStyle}
          title={'Tạo tài khoản đăng nhập'}
        />
        <BigButton
          containerStyle={styles.buttonLogin}
          textStyle={styles.titleStyle}
          title={'Đăng nhập bằng tài khoản của bạn'}
        />
      
      </View>
    </View>
  );
};

export default Lobby;
