import React from 'react';
import {screens as bottomScreens} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';

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
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon name="feed" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Post"
        component={bottomScreens.AddPost}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color, size}) => (
            <IonicIcons name="add-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Account"
        component={bottomScreens.Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="account" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
