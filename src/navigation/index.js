import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Import your screens
import HomeMain from '../components/screens/HomeScreen';
import RequestHistory from '../components/screens/RequestHistory';
import Profiles from '../components/screens/Profiles';
import Notifications from '../components/screens/NotificationScreen';
import OrderLocation from '../components/screens/subscreens/OrderLocations';
import LocationSelectionScreen from '../components/screens/subscreens/SelectLocation';
import CreateOrder from '../components/screens/subscreens/CreateOrder';
import OrderList from '../components/screens/subscreens/OrderList';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomeTabs' component={HomeTabs} />
      <Stack.Screen name='OrderLocation' component={OrderLocation} />
      <Stack.Screen name='LocationSelectionScreen' component={LocationSelectionScreen} />
      <Stack.Screen name='CreateOrder' component={CreateOrder} />
      <Stack.Screen name='OrderList' component={OrderList} />
    </Stack.Navigator>
    
  );
}

const HomeTabs = () => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white' }} activeColor='black'>
      <Tab.Screen
        name='Home'
        component={HomeMain}
        options={{ tabBarIcon: ({ color }) => (<Feather name="home" size={24} color={color} />) }}
      />
      <Tab.Screen
        name='Orders'
        component={RequestHistory}
        options={{ tabBarIcon: ({ color }) => (<Feather name="shopping-bag" size={24} color={color} />) }}
      />
      <Tab.Screen
        name='Notifications'
        component={Notifications}
        options={{ tabBarIcon: ({ color }) => (<Feather name="bell" size={24} color={color} />) }}
      />
      <Tab.Screen
        name='Profile'
        component={Profiles}
        options={{ tabBarIcon: ({ color }) => (<Feather name="user" size={24} color={color} />) }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
