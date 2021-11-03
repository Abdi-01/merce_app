import React from 'react';
import { FlatList, Image, View } from 'react-native'
import { Button, Card, Text, Icon } from "react-native-elements"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartAction } from '../redux/actions/userAction';

const CartPage = (props) => {

    const dispatch = useDispatch()

    const { cartUser, iduser } = useSelector((state) => {
        return {
            cartUser: state.userReducer.cart,
            iduser: state.userReducer.id
        }
    })

    const totalPayment = () => {
        let total = 0;
        if (cartUser.length > 0) {
            cartUser.forEach(item => {
                total += item.subTotal
            })
        }

        return total
    }

    const btInc = (idx) => {
        let temp = [...cartUser]
        temp[idx].qty += 1
        dispatch(updateCartAction(temp, iduser))
    }
    
    const btDec = (idx) => {
        let temp = [...cartUser]
        temp[idx].qty -= 1
        dispatch(updateCartAction(temp, iduser))
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(10) }}>
            <FlatList
                data={cartUser}
                renderItem={({ item, index }) => (
                    <Card containerStyle={{ width: wp(100), margin: 0 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <Image source={{ uri: item.image }} style={{ width: wp(12), height: hp(5) }} />
                            <View>
                                <Text>{item.nama}</Text>
                                <Text>Rp. {item.harga}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Button type="outline" icon={
                                    <Icon type="feather" name="minus" size={15} />
                                } onPress={() => btDec(index)} />
                                <Text h4 style={{ marginHorizontal: 10 }}>{item.qty}</Text>
                                <Button type="outline" icon={
                                    <Icon type="feather" name="plus" size={15} />
                                } onPress={() => btInc(index)} />
                            </View>
                        </View>
                    </Card>
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: wp(2) }}
            />
            <View style={{ padding: wp(3), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text>Total Payment</Text>
                    <Text h4>Rp. {totalPayment()}</Text>
                </View>
                <Button
                    title="Checkout"
                />
            </View>
        </View>
    )
}

export default CartPage