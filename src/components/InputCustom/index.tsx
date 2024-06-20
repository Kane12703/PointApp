import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input, InputProps} from '@rneui/base';
import styles from './styles';
const InputCustom: React.FunctionComponent<InputProps> = props => {
  return (
    <Input
      containerStyle={props.containerStyle || styles.container}
      multiline={props.multiline}
      placeholder={props.placeholder}
      inputStyle={props.inputStyle || styles.inputStyle}
      numberOfLines={props.numberOfLines}
      inputContainerStyle={
        props.inputContainerStyle || styles.inputContainerStyle
      }
      onChangeText={props.onChangeText}
      value={props.value}
      errorStyle={{height: 0}}
      keyboardType={props.keyboardType}
      secureTextEntry={props.secureTextEntry}
    />
  );
};

export default InputCustom;
