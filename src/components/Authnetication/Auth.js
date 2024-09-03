import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RootNavigator from '../../navigation';

const Stack = createStackNavigator();

const AppAuth = () => {
  return (

      <Stack.Navigator initialRouteName="SignIn" screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="RootNavigator" component={RootNavigator} />
      </Stack.Navigator>

  );
};

export default AppAuth;
