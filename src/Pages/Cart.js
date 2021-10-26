import React from 'react';
import { View } from 'react-native'
import { Button, Text } from "react-native-elements"

const CartPage = (props) => {

    const btBack = () => {
        props.navigation.goBack()
    }
    return (
        <View>
            <Text h2>Cart Page</Text>
            <Button
                title="Back"
                onPress={btBack}
            />
        </View>
    )
}

export default CartPage