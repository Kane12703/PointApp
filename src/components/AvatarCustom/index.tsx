import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, AvatarProps } from '@rneui/base'
import colors from '../../assets/colors'
import { normalize } from '@rneui/themed'
import styles from './styles'

const AvatarCustom : React.FunctionComponent<AvatarProps> = props =>{
  return (
    <Avatar
    size={'medium'}
    containerStyle={styles.containerStyle}
    rounded
    onPress={props.onPress}
    source={props.source||{uri:'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp'}}

  />
  )
}

export default AvatarCustom
