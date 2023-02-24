import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChartLineUp, List} from 'phosphor-react-native';

import {Home} from '../screens/Home';
import {ListActions} from '../screens/ListActions';
import {useTheme} from 'styled-components/native';

const {Navigator, Screen} = createBottomTabNavigator();

export const ActionTabRoutes = () => {
  const {colors} = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.title,
        tabBarStyle: {
          height: 80,
          backgroundColor: colors.secondary,
        },
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => ChartLineUp({color, size: 35}),
        }}
      />
      <Screen
        name="ListActions"
        component={ListActions}
        options={{
          tabBarIcon: ({color}) => List({color, size: 35}),
        }}
      />
    </Navigator>
  );
};
