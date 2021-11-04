import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../Pages/Home';
import CartPage from '../Pages/Cart';
import { Icon } from 'react-native-elements';
import AccountPage from '../Pages/Account';

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
                        }else if(route.name=="Account"){
                            iconName = "user";
                        }

                        return <Icon name={iconName} type="feather" size={24} color={color} />
                    }
                })
            }
        >
            <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={CartPage} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={AccountPage} options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

export default TabNavigation