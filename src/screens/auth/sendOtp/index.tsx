import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import OTPInput from '../../../components/OTPInput'; // Đảm bảo đường dẫn đúng
import styles from './styles';
import {BigButton} from '../../../components';
import {normalize} from '@rneui/themed';
import colors from '../../../assets/colors';

const SendOtp = () => {
  const numberOtp = (txt: string) => {
    console.log(txt);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback style={{flex: 1}}>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Text style={styles.textVerify}>Xác thực tài khoản</Text>
          <Text style={styles.textDescribe}>
            Mã xác thực đã được gửi đến <Text style={styles.emailSend}>thaolkmn@gmail.com</Text> vui lòng kiểm tra và
            nhập mã :
          </Text>
          <View style={styles.inputOtpConTainer}>
            <Text style={styles.textTime}>60s</Text>
            <OTPInput
              handleTextChange={numberOtp}
              tintColor={colors.yellow}
              inputCount={4}
              autoFocus={true}
              containerStyle={styles.otpContainerStyle}
            />
            <View style={styles.ReSendContainer}>
              <Text style={styles.textNoSendOtp}>Không nhận được mã OTP ?</Text>
              <TouchableOpacity>
                <Text style={styles.textReSend}> Gửi lại</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btnSubmit}>
            <BigButton title={'Tiếp tục'} />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SendOtp;
