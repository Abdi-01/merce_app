import React from 'react';
import { FlatList, Image, View } from 'react-native'
import { Button, Card, Text, Icon } from "react-native-elements"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector } from 'react-redux';

const CartPage = (props) => {

    const { cartUser, iduser } = useSelector((state) => {
        return {
            cartUser: state.userReducer.cart,
            iduser: state.userReducer.id
        }
    })

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(10) }}>
            <FlatList
                data={cartUser}
                renderItem={({ item, index }) => (
                    <Card containerStyle={{ width: wp(100), margin: 0 }}>
                        <View style={{ flexDirection: "row", justifyContent:"space-around" }}>
                            <Image source={{ uri: item.image }} style={{ width: wp(12), height: hp(5) }} />
                            <View>
                                <Text>{item.nama}</Text>
                                <Text>Rp. {item.harga}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Button type="outline" icon={
                                    <Icon type="feather" name="minus" size={15} />
                                } />
                                <Text h4 style={{ marginHorizontal: 10 }}>{item.qty}</Text>
                                <Button type="outline" icon={
                                    <Icon type="feather" name="plus" size={15} />
                                } />
                            </View>
                        </View>
                    </Card>
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: wp(2) }}
            />
        </View>
    )
}

export default CartPage