import { StyleSheet, Text, TextInput, View, TextInputKeyPressEventData, NativeSyntheticEvent, ViewStyle } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import styles from './styles';
import colors from '../../assets/colors';
import { normalize } from '@rneui/themed';
import { Device } from '../../utils/device';
import { ms, s, vs } from 'react-native-size-matters';

interface OTPInputProps {
  containerStyle?: ViewStyle;
  inputCount?: number;
  tintColor?: string;
  offTintColor?: string;
  textInput?: object;
  autoFocus?: boolean;
  keyboardType?: string;
  inputCellLength?: number;
  defaultValue?: string;
  handleCallTextChange?: (text: string, index: number) => void;
  handleTextChange: (text: string) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({
  containerStyle = {},
  inputCount = 4,
  tintColor = '',
  offTintColor = 'grey',
  textInput = {},
  autoFocus = false,
  inputCellLength = 1,
  defaultValue = '',
  handleCallTextChange = () => {},
  handleTextChange = () => {}
}) => {
  const inputs = useRef<(TextInput | null)[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(inputCount).fill(''));
  const [focusInput, setFocusInput] = useState<number>(0);
  const WIDTH = Device.getDeviceWidth();

  useEffect(() => {
    if (defaultValue) {
      const otpArray = getOtpText(inputCount, inputCellLength, defaultValue);
      setOtp(otpArray);
    }
  }, [defaultValue, inputCount, inputCellLength]);

  function getOtpText(inputCount: number, inputCellLength: number, text: string): string[] {
    let m = text.match(new RegExp(`.{1,${inputCellLength}}`, 'g')) || [];
    return m.slice(0, inputCount);
  }

  function onInputFocusEvent(i: number) {
    const prevIndex = i - 1;
    if (prevIndex > -1 && !otp[prevIndex]) {
      inputs.current[prevIndex]?.focus();
      return;
    }
    setFocusInput(i);
  }

  function onKeyPress(e: NativeSyntheticEvent<TextInputKeyPressEventData>, i: number) {
    const val = otp[i] || '';
    if (e.nativeEvent.key !== 'Backspace' && i !== inputCount - 1) {
      inputs.current[i + 1]?.focus();
      return;
    }
    if (e.nativeEvent.key === 'Backspace' && i !== 0) {
      if (!val.length && otp[i - 1].length === inputCellLength) {
        let temp = [...otp];
        temp[i - 1] = otp[i - 1].split('').slice(0, -1).join('');
        setOtp(temp);
        handleTextChange(temp.join(''));
        inputs.current[i - 1]?.focus();
      }
    }
  }

  function isValid(text: string) {
    const _isValid = /^[0-9a-zA-Z]+$/;
    return _isValid.test(text);
  }

  function onChangeText(text: string, i: number) {
    if (text && !isValid(text)) {
      return;
    }
    const tempOtp = [...otp];
    tempOtp[i] = text;
    setOtp(tempOtp);
    handleCallTextChange && handleCallTextChange(text, i);
    if (text.length === inputCellLength && i !== inputCount - 1) {
      inputs.current[i + 1]?.focus();
    }
    handleTextChange(tempOtp.join(''));
  }

  return (
    <View style={[styles.containerStyle, containerStyle]}>
      {Array.from({ length: inputCount }, (_, i) => {
        const inputStyle : any = [
          { height: vs(55), width: s(55), margin:ms(10),borderWidth: 1, textAlign: 'center', fontSize: normalize(22), color: colors.black, borderColor: offTintColor },
          focusInput === i && { borderColor: tintColor },
        ];
        return (
          <TextInput
            ref={e => inputs.current[i] = e}
            key={i}
            autoCorrect={false}
            autoFocus={autoFocus && i === 0}
            keyboardType={'numeric'}
            value={otp[i] || ''}
            style={inputStyle}
            maxLength={inputCellLength}
            onFocus={() => onInputFocusEvent(i)}
            onChangeText={text => onChangeText(text, i)}
            multiline={false}
            selectionColor={tintColor}
            onKeyPress={(e) => onKeyPress(e, i)}
          />
        );
      })}
    </View>
  );
};


export default OTPInput;
