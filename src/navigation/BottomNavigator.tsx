import React from 'react';
import {screens as bottomScreens} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Components} from '../components';

const BottomTab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <BottomTab.Navigator
      initialRouteName="Post"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Screen
        name="Feed"
        component={bottomScreens.Feeds}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: Components.FeedIcon,
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={bottomScreens.AddPost}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: Components.AddPostIcon,
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={bottomScreens.Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: Components.AccountIcon,
        }}
      />
    </BottomTab.Navigator>
  );
}
