import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, ButtonProps } from '@rneui/themed'
import styles from './styles'
import { BigButtonProps } from './types'



const BigButton : React.FunctionComponent<BigButtonProps> = (props) => {
  return (
    <TouchableOpacity
    onPress={props.onPressButton}
    style={[styles.containerStyle,props.containerStyle,]}>

    <Text style={[styles.titleStyle,props.textStyle,]}>
      {props.title}
    </Text>
  </TouchableOpacity>
  )
}
export default BigButton

