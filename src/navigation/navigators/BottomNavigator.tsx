import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {routes} from '../../constants';
import icons from '../../constants/icons';
import {History, Home, Notification, Profile} from '../../screens/main';
import {fontFamilySetup} from '../../utils/font';
import colors from '../../assets/colors';
import {vs} from 'react-native-size-matters';

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
        style={[{tintColor: color}, {width: 18, height: 18}]}
      />
      <Text
        style={[
          {color: color},
          {
            fontFamily: focused
              ? fontFamilySetup.bold
              : fontFamilySetup.regular,
            fontWeight: focused ? '800' : 'normal',
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
          tabBarActiveTintColor: colors.yellow,
          tabBarInactiveTintColor: colors.black,
          tabBarStyle: {
            backgroundColor: colors.white,
            height: vs(39),
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
                icon={focused ? icons.homefilled : icons.home}
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
                icon={focused ? icons.historyfilled : icons.history}
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
                icon={focused ? icons.notificationfilled : icons.notification}
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
                icon={focused ? icons.profilefilled : icons.profile}
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
