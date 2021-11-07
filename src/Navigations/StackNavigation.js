import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from '../Pages/Login';
import TabNavigation from './TabNavigation';
import RegisPage from '../Pages/Regis';
import DetailPage from '../Pages/Detail';
import TransactionsPage from '../Pages/Transaction';

const Stack = createNativeStackNavigator()

const StackNavigation = (props) => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
            <Stack.Screen name="TabNav" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Regis" component={RegisPage} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailPage} />
            <Stack.Screen name="Transactions" component={TransactionsPage} />
        </Stack.Navigator>
    )
}

export default StackNavigation