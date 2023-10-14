import React from 'react';
import {screens as bottomScreens} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Post"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}>
      <BottomTab.Screen name="Feed" component={bottomScreens.Feeds} />
      <BottomTab.Screen name="Post" component={bottomScreens.AddPost} />
      <BottomTab.Screen name="Account" component={bottomScreens.Account} />
    </BottomTab.Navigator>
  );
}
