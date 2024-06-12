import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

// Import your screens
import UserInfo from '../components/UserInfo';
import HomeMain from '../components/screens/HomeScreen';
import RequestHistory from '../components/screens/RequestHistory';
import Profiles from '../components/screens/Profiles';
import Notifications from '../components/screens/NotificationScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeTabs' component={HomeTabs} />
    </Stack.Navigator>

    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return(
        <Tab.Navigator>

            <Tab.Screen name='Home' component={HomeStackNavigator} options={{tabBarIcon: ({color}) => (<Feather name="home" size={24} color={color} />)}}/>
            <Tab.Screen name='Orders' component={OrderStackNavigator} options={{tabBarIcon: ({color}) => (<Feather name="shopping-bag" size={24} color={color} />)}}/>
            <Tab.Screen name='Notifications' component={NotificationStackNavigator} options={{tabBarIcon: ({color}) => (<Feather name="bell" size={24} color={color} />)}}/>
            <Tab.Screen name='Profile' component={SettingsStackNavigator} options={{tabBarIcon: ({color}) => (<Feather name="user" size={24} color={color} />)}}/>

        </Tab.Navigator>
    )
}

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator =()=> {
    return(
        <HomeStack.Navigator screenOptions={{headerShown: false}}>
            <HomeStack.Screen name='HomeScreen' component={HomeMain}/>
        </HomeStack.Navigator>
    )
}


const OrderStack = createNativeStackNavigator();

const OrderStackNavigator =()=> {
    return(
        <OrderStack.Navigator screenOptions={{headerShown: false}}>
            <OrderStack.Screen name='OrderScreen' component={RequestHistory}/>
        </OrderStack.Navigator>
    )
}

const NotificationStack = createNativeStackNavigator();

const NotificationStackNavigator =()=> {
    return(
        <NotificationStack.Navigator screenOptions={{headerShown: false}}>
            <NotificationStack.Screen name='NotificationScreen' component={Notifications}/>
        </NotificationStack.Navigator>
    )
}

const SettingsStack = createNativeStackNavigator();

const SettingsStackNavigator =()=> {
    return(
        <SettingsStack.Navigator screenOptions={{headerShown: false}}>
            <SettingsStack.Screen name='ProfileScreen' component={Profiles}/>
        </SettingsStack.Navigator>
    )
}

export default RootNavigator;
