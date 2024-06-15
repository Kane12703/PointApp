import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import RenderItem, {dataE} from './renderItem';
import {FlatList} from 'react-native-gesture-handler';
import RenderItemE from './renderItem';

const ElectronicInvoice = () => {
  return (
    <View style={styles.container}>
      {dataE.length > 0 ? (
        <FlatList
          data={dataE}
          renderItem={({item}) => (
            <RenderItemE
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

export default ElectronicInvoice;
