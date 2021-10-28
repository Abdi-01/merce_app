import React, { useEffect } from 'react';
import { View } from 'react-native'
import { Button, Text } from "react-native-elements"
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/actions';

const HomePage = (props) => {

    const dispatch = useDispatch()

    const btBack = () => {
        props.navigation.goBack()
    }

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    const { products } = useSelector((state) => {
        return {
            products: state.productReducer.listProducts
        }
    })

    return (
        <View>
            <Text h2>Home Page</Text>
            <Button
                title="Back"
                onPress={btBack}
            />
        </View>
    )
}

export default HomePage