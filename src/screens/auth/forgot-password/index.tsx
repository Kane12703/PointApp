import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BigButton, InputCustom} from '../../../components';
import colors from '../../../assets/colors';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textForgot}>Quên mật khẩu</Text>
      </View>
      <Text style={styles.textDer}>Vui lòng nhập vào mật khẩu mới của bạn</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text>Nhập mật khẩu mới
        </Text>
        <InputCustom
          placeholder="Nhập mật khẩu mới của bạn"
          secureTextEntry={true}
        />
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập lại mật khẩu
        </Text>
        <InputCustom
          placeholder="Nhập lại mật khẩu của bạn"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <BigButton containerStyle={styles.buttonStyle} title={'Đổi mật khẩu'} />
      </View>
    </View>
  );
};

export default ForgotPassword;
