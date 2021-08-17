import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { setRootViewBackgroundColor } from 'react-native-root-view-background'
import Login from './screens/Login';
import Registration from './screens/Registration';
import ForgotPassword from './screens/ForgotPassword';
import VerifyCode from './screens/VerifyCode';
import HomeScreen from './screens/HomeScreen';
import ViewProfile from './screens/ViewProfile';
import BottomNavigation from './screens/BottomNavigation';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer theme={{
        colors:{
          background: "#131D23"
        }
      }}>
        <Stack.Navigator initialRouteName='Login'> 
          <Stack.Screen name='Login' component={Login} options={{headerShown: false}} />
          <Stack.Screen name='Register' component={Registration} options={{headerShown: false}} />
          <Stack.Screen name='Forgot' component={ForgotPassword} options={{headerShown: false}} />
          <Stack.Screen name='Verify' component={VerifyCode} options={{headerShown: false}} />
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: false}} />
          <Stack.Screen name='ViewProfile' component={ViewProfile} options={{headerShown: false}} />
          <Stack.Screen name='Bottom' component={BottomNavigation} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#131D23',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
