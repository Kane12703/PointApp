import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BigButton, InputCustom} from '../../../components';
import styles from './styles';
import colors from '../../../assets/colors';
import { NavigationService } from '../../../navigation/NavigationService';
import { routes } from '../../../constants';

const Register: React.FC  = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textRegister}>Đăng nhập</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập số điện thoại
        </Text>
        <InputCustom
          placeholder="Số điện thoại của bạn"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.buttonContainer}>
        <BigButton title={'Tiếp tục'} />
      </View>
    </View>
  );
};

export default Register;
