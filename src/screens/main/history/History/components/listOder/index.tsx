import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ItemPoint from '../itemPoint';
import {FlatList} from 'react-native-gesture-handler';
import {normalize} from '@rneui/themed';

const ListOrder = () => {
  const data = Array.from({length: 20}, (_, index) => ({
    key: index.toString(),
    value: `Item ${index + 1}`,
  }));
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          style={{marginBottom:normalize(10)}}
          contentContainerStyle={{gap: normalize(10)}}
          renderItem={({item}) => <ItemPoint />}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};

export default ListOrder;
