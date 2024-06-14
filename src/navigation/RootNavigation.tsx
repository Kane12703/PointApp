import {NavigationContainer} from '@react-navigation/native';
import {makeStyles, useThemeMode} from '@rneui/themed';
import React, {useCallback, useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import AppNavigator from './navigators/AppNavigator';
import AuthNavigator from './navigators/AuthNavigator';
import { navigationRef } from './NavigationService';



const RootNavigation = () => {

  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar translucent barStyle={'dark-content'} backgroundColor="transparent" />
    <AuthNavigator /> 
    {/* <AppNavigator/> */}
    </NavigationContainer>
  );
};

export default RootNavigation;

