import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  StatusBar.setBarStyle('dark-content', true);
  StatusBar.setBackgroundColor('white');
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
