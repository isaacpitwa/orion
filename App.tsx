import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider} from 'react-native-toast-notifications';
import StackNavigator from './src/navigation/StackNavigator';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  StatusBar.setBarStyle('dark-content', true);
  StatusBar.setBackgroundColor('white');
  return (
    <ToastProvider duration={4000} offsetBottom={80}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
}

export default App;
