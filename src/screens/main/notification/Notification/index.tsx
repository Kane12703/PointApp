import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllNotification from './all notification';
import ElectronicInvoice from './electronic invoice';
import {routes} from '../../../../constants';
import { ms, vs } from 'react-native-size-matters';

const Tab = createMaterialTopTabNavigator();

const Notification = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông báo</Text>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIndicatorStyle: styles.tabBarIndicator,
          tabBarInactiveTintColor: '#808080',
          tabBarItemStyle: {
            width: 'auto',
            height: vs(39),
            paddingHorizontal: ms(10),
          },
        }}>
        <Tab.Screen name={routes.ALLNOTIFICATION} component={AllNotification} />
        <Tab.Screen
          name={routes.ELECTRONICINVOICE}
          component={ElectronicInvoice}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Notification;
