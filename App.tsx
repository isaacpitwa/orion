import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ToastProvider, useToast} from 'react-native-toast-notifications';
import StackNavigator from './src/navigation/StackNavigator';
import {StatusBar} from 'react-native';
import {Components} from './src/components';

function App(): JSX.Element {
  StatusBar.setBarStyle('dark-content', true);
  StatusBar.setBackgroundColor('white');
  return (
    <ToastProvider
      duration={4000}
      offsetBottom={80}
      renderToast={toast => <Components.Toast toast={toast} />}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ToastProvider>
  );
}

export default App;
