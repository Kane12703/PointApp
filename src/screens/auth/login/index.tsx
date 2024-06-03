import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {BigButton, InputCustom} from '../../../components';
import styles from './styles';
import colors from '../../../assets/colors';
import {NavigationService} from '../../../navigation/NavigationService';
import {routes} from '../../../constants';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textRegister}>Đăng nhập</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập họ tên
        </Text>
        <InputCustom
          placeholder="Số điện thoại của bạn hoặc email"
          keyboardType="numeric"
        />
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập mật khẩu
        </Text>
        <InputCustom placeholder="Mật khẩu của bạn" secureTextEntry={true}/>
      </View>

      <View style={styles.buttonContainer}>
        <BigButton title={'Đăng nhập'} />
      </View>
    </View>
  );
};

export default Login;
