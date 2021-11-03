import axios from 'axios';
import React from 'react';
import { FlatList, Image, View, Alert } from 'react-native'
import { Button, Card, Text, Icon } from "react-native-elements"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useSelector, useDispatch } from 'react-redux';
import { API_URL } from '../helper';
import { updateCartAction } from '../redux/actions/userAction';

const CartPage = (props) => {

    const dispatch = useDispatch()

    const { cartUser, iduser, products, username } = useSelector((state) => {
        return {
            cartUser: state.userReducer.cart,
            iduser: state.userReducer.id,
            username: state.userReducer.username,
            products: state.productReducer.listProducts
        }
    })

    const totalPayment = () => {
        let total = 0;
        // if (cartUser.length > 0) {
            cartUser.forEach(item => {
                total += item.subTotal
            })
        // }

        return total
    }

    const btInc = (idx) => {

        let temp = [...cartUser]
        // 1. cari data products berdasarkan idproduct pada cartUser
        let searchproduct = products.filter(val => val.id == temp[idx].idproduct)
        console.log(searchproduct[0].stock)
        // 2. jika ditemukan, gunakan stock product untuk membatasi proses increment agar tidak melebih stocknya
        if (temp[idx].qty < searchproduct[0].stock) {
            temp[idx].qty += 1;
            dispatch(updateCartAction(temp, iduser))
        } else {
            Alert.alert("Warning ⚠️", "Out Of Stock")
        }
    }

    const btDec = (idx) => {
        let temp = [...cartUser]
        console.log(temp[idx].qty == 1)
        if (temp[idx].qty == 1) {
            temp.splice(idx, 1)
        } else {
            temp[idx].qty -= 1
        }
        dispatch(updateCartAction(temp, iduser))
    }

    const btCheckout = () => {
        // iduser, username,date,totalpayment, detail_product, status("unpaid")
        // mendapatkan date
        // mendapatkan username
        // axios.post ==> userTransaction
        // alert success
        // menghapus data cartUser seblumnya
        let date = new Date()
        let transaksi = {
            iduser,
            username,
            date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
            totalPayment: totalPayment(),
            detail: cartUser,
            status: "Unpaid"
        }

        axios.post(API_URL + "/userTransactions", transaksi)
            .then((res) => {
                if (res.data) {
                    dispatch(updateCartAction([], iduser))
                    Alert.alert("Success ✅", "Checkout Success")
                }
            }).catch((err) => {
                console.log(err)
            })
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
                    onPress={btCheckout}
                />
            </View>
        </View>
    )
}

export default CartPage