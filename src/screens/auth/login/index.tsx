import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BigButton, ButtonGoogle, InputCustom} from '../../../components';
import styles from './styles';
import colors from '../../../assets/colors';
import {NavigationService} from '../../../navigation/NavigationService';
import {routes} from '../../../constants';
import { ms } from 'react-native-size-matters';

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogin}>Đăng nhập</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập số điện thoại hoặc
          email
        </Text>
        <InputCustom placeholder="Số điện thoại của bạn hoặc email" />
        <Text style={styles.labelStylel}>
          <Text style={{color: colors.black_1}}>*</Text> Nhập mật khẩu
        </Text>
        <InputCustom placeholder="Mật khẩu của bạn" secureTextEntry={true} />
        <View style={styles.forgetContainer}>
          <View></View>
          <TouchableOpacity>
            <Text style={styles.textForget}>Quên mật khẩu ?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <BigButton title={'Đăng nhập'} />
      </View>
      <View style={styles.rememberContainer}>
        <Text style={styles.textRemember}>Chưa có tài khoản ?</Text>
        <TouchableOpacity>
          <Text onPress={()=>NavigationService.navigate(routes.CREATE_ACCOUNT)} style={styles.textForget}> Đăng kí</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.loginOther}>
        <View style={styles.viewUnderLine} />
        <Text style={styles.textLoginOther}>Hay đăng nhập</Text>
        <View style={styles.viewUnderLine} />
      </View>

      <ButtonGoogle containerStyle={{marginTop:ms(20)}}/>
    </View>
  );
};

export default Login;
