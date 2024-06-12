import 'react-native-gesture-handler'
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootsNavigator from './src/navigation';
import RootNavigator from './src/navigation';


export default function App() {
  return (

    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
    

  );
}
