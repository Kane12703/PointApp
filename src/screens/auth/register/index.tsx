import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import {BigButton, ButtonGoogle, InputCustom} from '../../../components';
import styles from './styles';
import colors from '../../../assets/colors';
import {NavigationService} from '../../../navigation/NavigationService';
import {routes} from '../../../constants';
import { ms } from 'react-native-size-matters';

const Register: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textRegister}>Đăng ký</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập họ tên
        </Text>
        <InputCustom placeholder="Họ tên của bạn" />
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập số điện thoại
        </Text>
        <InputCustom
          placeholder="Số điện thoại của bạn"
          keyboardType="numeric"
        />
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập email
        </Text>
        <InputCustom placeholder="Email của bạn" />
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập mật khẩu
        </Text>
        <InputCustom placeholder="Mật khẩu của bạn" secureTextEntry={true} />
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập mật khẩu
        </Text>
        <InputCustom
          placeholder="Xác nhận mật khẩu của bạn"
          secureTextEntry={true}
        />
      </View>
        <BigButton
          containerStyle={styles.buttonContainer}
          title={'Đăng kí'}
          onPressButton={() => NavigationService.navigate(routes.SEND_OTP)}
        />

      <View style={styles.loginOther}>
        <View style={styles.viewUnderLine} />
        <Text style={styles.textLoginOther}>Hay đăng nhập</Text>
        <View style={styles.viewUnderLine} />
      </View>

      <ButtonGoogle containerStyle={{marginTop:ms(20)}}/>
    </View>
  );
};

export default Register;
