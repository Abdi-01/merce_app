import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Pages/Login';
import TabNavigation from './TabNavigation';
import RegisPage from '../Pages/Regis';

const Stack = createNativeStackNavigator()

const StackNavigation = (props) => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="TabNav" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Regis" component={RegisPage} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigation