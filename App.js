import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import AppAuth from './src/components/Authnetication/Auth';
import HomeNavigator from './src/navigation';
import DriverRootNav from './DriverAppTesting/navigation';

const Stack = createStackNavigator();

export default function App(){
  return (
  <GestureHandlerRootView>
    <NavigationContainer>
      
      <AppAuth/>
      {/* <HomeNavigator /> */}
      {/* <DriverRootNav/> */}
      

      <StatusBar style="auto" />
    </NavigationContainer> 
    </GestureHandlerRootView>
  );
}
