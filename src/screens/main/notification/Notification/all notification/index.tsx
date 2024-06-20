import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import RenderItem, {dataA} from './renderItem';

const AllNotification = () => {
  return (
    <View style={styles.container}>
      {dataA.length > 0 ? (
        <FlatList
          data={dataA}
          showsVerticalScrollIndicator={false}
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
      ) : (
        <View style={styles.viewDataEmpty}>
          <Image
            source={require('../../../../../assets/images/notification.png')}
            style={styles.image}
          />
          <Text style={styles.textNotificationEmpty}>
            Hiện tại không có thông báo
          </Text>
          <TouchableOpacity style={styles.btnReload}>
            <Text style={styles.textReload}>Tải lại trang</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default AllNotification;
