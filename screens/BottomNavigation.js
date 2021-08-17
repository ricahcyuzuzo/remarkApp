import React from 'react';
import { Feather, FontAwesome, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            tabBarActiveTintColor: '#c4c4c4',
            tabBarInactiveTintColor: '#4c4c4c',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: '#13232E',
                height: 60,
            }
        }}
        >
            <Tab.Screen
             name='Home' 
             component={HomeScreen}
             options={{
                 tabBarIcon: ({ color, size}) => (
                    <Feather name="home" size={size} color={color} />
                 )
             }} 
             />
            <Tab.Screen 
             name='Search' 
             component={HomeScreen}
             options={{
                tabBarIcon: ({ color, size}) => (
                   <Feather name="search" size={size} color={color} />
                )
            }} 
             />
            <Tab.Screen 
             name='Upload' 
             component={HomeScreen}
             options={{
                tabBarIcon: ({ color, size}) => (
                   <Feather name="plus" size={size} color={color} />
                )
            }} 
             />
            <Tab.Screen 
             name='Invitations' 
             component={HomeScreen}
             options={{
                tabBarIcon: ({ color, size}) => (
                    <FontAwesome name="envelope-o" size={size} color={color} />
                )
            }} 
             />
            <Tab.Screen 
             name='Profile' 
             component={HomeScreen}
             options={{
                tabBarIcon: ({ color, size}) => (
                    <Ionicons name='person-outline' size={size} color={color} />
                )
            }}
             />
        </Tab.Navigator>
    )
}

export default BottomNavigation
