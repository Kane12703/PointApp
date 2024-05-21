import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {Text, makeStyles, normalize} from '@rneui/themed';
import React, {FunctionComponent} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import { routes } from '../../constants';
import { Icon } from '@rneui/base'; 
import {useKeyboard} from '@react-native-community/hooks';
import { Home, Profile,History} from '../../screens/main';


const BottomTabs = createBottomTabNavigator();


const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: true,
};

const BottomNavigator: FunctionComponent = () => {
 

  return (
    <BottomTabs.Navigator
      screenOptions={screenOptions}>
      <BottomTabs.Screen  name={routes.HOME} component={Home} />
      <BottomTabs.Screen name={routes.PROFILE} component={Profile} />
      <BottomTabs.Screen name={routes.HISTORY} component={History} />
    </BottomTabs.Navigator>
  );
};

export default BottomNavigator;
