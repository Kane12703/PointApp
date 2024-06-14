import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GoogleIcon } from '../../assets/svg'
import styles from './styles'
import { ButtonGoogleProps } from './types'

const ButtonGoogle:  React.FunctionComponent<ButtonGoogleProps> = (props) => {
  return (
    <TouchableOpacity onPress={props.onPressButton} style={[styles.btnLoginGoogle,props.containerStyle]}>
        <GoogleIcon />
        <Text style={[styles.textLoginGoogle,props.textStyle]}>Google</Text>
      </TouchableOpacity>
  )
}

export default ButtonGoogle

