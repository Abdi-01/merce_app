import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Pages/Home';
import CartPage from '../Pages/Cart';

const Tab = createBottomTabNavigator()
const TabNavigation = (props) => {

    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Cart" component={CartPage} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}

export default TabNavigation