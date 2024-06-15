import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Icon, Text, normalize} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';
import {routes} from '../../constants';
import {History, Home, Notification, Profile} from '../../screens/main';

const BottomTabs = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
};

const BottomNavigator: FunctionComponent = () => {
  return (
    <BottomTabs.Navigator screenOptions={screenOptions}>
      <BottomTabs.Screen
        name={routes.HOME}
        component={Home}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocus : styles.labelUnFocus}>
              Trang chủ
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="home-outline"
              type="ionicon"
              size={22}
              color={focused ? colors.yellow : 'gray'}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={routes.HISTORY}
        component={History}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocus : styles.labelUnFocus}>
              Lịch sử
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="repeat-outline"
              type="ionicon"
              size={22}
              color={focused ? colors.yellow : 'gray'}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={routes.NOTIFICATION}
        component={Notification}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocus : styles.labelUnFocus}>
              Thông báo
            </Text>
          ),
          tabBarLabelStyle: {color: colors.yellow},
          tabBarIcon: ({focused}) => (
            <Icon
              name="notifications-outline"
              type="ionicon"
              size={22}
              color={focused ? colors.yellow : 'gray'}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name={routes.PROFILE}
        component={Profile}
        options={{
          tabBarLabel: ({focused}) => (
            <Text style={focused ? styles.labelFocus : styles.labelUnFocus}>
              Tài khoản
            </Text>
          ),
          tabBarLabelStyle: {color: colors.yellow},
          tabBarIcon: ({focused}) => (
            <Icon
              name="person-circle-outline"
              type="ionicon"
              size={22}
              color={focused ? colors.yellow : 'gray'}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
const styles = StyleSheet.create({
  tabContainer: {
    position: 'absolute',
    width: '90%',
    borderRadius: 12,
    left: '5%',
    bottom: 20,
    backgroundColor: 'white',
    height: 60,
  },
  labelFocus: {
    fontSize: normalize(10),
    color: colors.yellow,
    paddingBottom: normalize(5),
  },
  labelUnFocus: {
    fontSize: normalize(10),
    color: 'gray',
    paddingBottom: normalize(5),
  },
});
