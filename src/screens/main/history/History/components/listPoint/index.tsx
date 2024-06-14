import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ItemPoint from '../itemPoint';
import {FlatList} from 'react-native-gesture-handler';
import {normalize} from '@rneui/themed';

const ListPoint = () => {
  const data = Array.from({length: 20}, (_, index) => ({
    key: index.toString(),
    value: `Item ${index + 1}`,
  }));
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          ListHeaderComponent={() => (
            <View style={styles.sumPointContainer}>
              <View style={styles.pointContainer}>
                <Text style={styles.titleSumPoint}>Tổng điểm : </Text>
                <Text style={styles.sumPoint}>62.013</Text>
              </View>
              <View style={styles.pointContainer}>
                <Text style={styles.titleSumPoint}>Tổng điểm TT: </Text>
                <Text style={styles.sumPoint}>2.22</Text>
              </View>
            </View>
          )}
          style={{marginBottom: normalize(10)}}
          contentContainerStyle={{gap: normalize(10)}}
          renderItem={({item}) => <ItemPoint />}
          keyExtractor={item => item.key}
        />
      </View>
    </View>
  );
};

export default ListPoint;
