import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import icons from '../../constants/icons';
import {routes} from '../../constants';
import {History, Home, Notification, Profile} from '../../screens/main';
import {fontFamilySetup} from '../../utils/font';

const BottomTabs = createBottomTabNavigator();

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({icon, color, name, focused}) => {
  return (
    <View style={styles.viewTabIcon}>
      <Image
        source={icon}
        resizeMode="contain"
        style={[{tintColor: color}, {width: 24, height: 24}]}
      />
      <Text
        style={[
          {color: color},
          {
            fontFamily: focused
              ? fontFamilySetup.bold
              : fontFamilySetup.regular,
          },
        ]}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout: React.FC = () => {
  return (
    <>
      <BottomTabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'yellow',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            backgroundColor: 'white',
            height: 63,
          },
        }}>
        <BottomTabs.Screen
          name={routes.HOME}
          component={Home}
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name={routes.HISTORY}
          component={History}
          options={{
            title: 'History',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.history}
                color={color}
                name="History"
                focused={focused}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name={routes.NOTIFICATION}
          component={Notification}
          options={{
            title: 'Notification',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.notification}
                color={color}
                name="Notification"
                focused={focused}
              />
            ),
          }}
        />
        <BottomTabs.Screen
          name={routes.PROFILE}
          component={Profile}
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </BottomTabs.Navigator>
    </>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  viewTabIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2,
  },
});
