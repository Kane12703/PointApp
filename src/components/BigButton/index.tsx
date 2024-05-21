import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, ButtonProps } from '@rneui/themed'
import styles from './styles'



const BigButton : React.FunctionComponent<ButtonProps> = (props) => {
  return (
    <Button onPress={props.onPress} title={props.title} buttonStyle={props.buttonStyle|| styles.buttonStyle} titleStyle={props.titleStyle|| styles.titleStyle}>
    </Button>
  )
}
export default BigButton

