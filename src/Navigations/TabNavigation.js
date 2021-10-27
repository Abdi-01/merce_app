import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Pages/Home';
import CartPage from '../Pages/Cart';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator()

const TabNavigation = (props) => {

    return (
        <Tab.Navigator initialRouteName="Home"
            screenOptions={
                ({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;
                        if (route.name == "Home") {
                            iconName = "home";
                        } else if (route.name == "Cart") {
                            iconName = "shopping-bag";
                        }

                        return <Icon name={iconName} size={24} color={color} />
                    }
                })
            }
        >
            <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Cart" component={CartPage} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default TabNavigation