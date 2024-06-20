import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';
import ItemPoint from '../itemPoint';
import {FlatList} from 'react-native';
import { ms } from 'react-native-size-matters';
import { Point } from '../../../../../../types/point.type';

const ListPoint = () => {
  const RenderItem = ({item}: {item: Point;}) => (
    <ItemPoint data={item}  />
  );
 


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
          showsVerticalScrollIndicator={false}
          style={{marginBottom: ms(10)}}
          contentContainerStyle={{gap: ms(10)}}
          renderItem={RenderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default ListPoint;

const data: Point[] = [
  {
    id: 1,
    time: '6/5/2024',
    point: '91.214.214.224',
  },
  {
    id: 2,
    time: '10/10/2023',
    point: '80.65.100.32',
  },
  {
    id: 3,
    time: '2/21/2024',
    point: '4.55.190.182',
  },
  {
    id: 4,
    time: '5/3/2024',
    point: '245.109.142.132',
  },
  {
    id: 5,
    time: '6/17/2024',
    point: '235.116.36.149',
  },
  {
    id: 6,
    time: '7/2/2023',
    point: '15.91.255.48',
  },
  {
    id: 7,
    time: '6/6/2024',
    point: '159.63.205.206',
  },
  {
    id: 8,
    time: '12/11/2023',
    point: '113.69.161.82',
  },
  {
    id: 9,
    time: '9/17/2023',
    point: '217.222.229.87',
  },
  {
    id: 10,
    time: '1/4/2024',
    point: '36.82.225.147',
  },
];
