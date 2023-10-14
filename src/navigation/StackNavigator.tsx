import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{
        gestureEnabled: false,
        cardStyle: {backgroundColor: 'white'},
      }}>
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
