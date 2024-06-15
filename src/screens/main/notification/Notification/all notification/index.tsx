import {View, Text, FlatList} from 'react-native';
import React from 'react';
import styles from './styles';
import RenderItem, {data} from './renderItem';

const AllNotification = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <RenderItem
            id={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            time={item.time}
          />
        )}
      />
    </View>
  );
};

export default AllNotification;
