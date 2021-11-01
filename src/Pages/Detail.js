import React, { useState } from 'react';
import { Alert, FlatList, Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Card, Icon, Input, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailPage = (props) => {
    const { detail } = props.route.params

    const [qty, setQty] = useState(1)

    const btAddToCart = () => {
        console.log(qty)
        console.log(typeof qty)
    }

    const btInc = () => {
        // menyiapkan tempValue variable
        let tempValue = qty;
        if (tempValue < detail.stock) {
            tempValue++
            setQty(parseInt(tempValue));
        } else {
            Alert.alert("Warning ⚠️", "Out Of Stock")
        }
    }

    const btDec = () => {
        let tempValue = qty;
        tempValue--
        setQty(parseInt(tempValue));
    }

    return (
        <KeyboardAvoidingView behavior="position" style={{ flex: 1, backgroundColor: "white" }} keyboardVert1icalOffset={100}>
            <View style={{ height: hp(50), width: wp(100) }}>
                <FlatList
                    data={detail.images}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={{ width: wp(100), height: hp(50) }} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View>
                <Card containerStyle={{ width: wp(100), margin: 0 }}>
                    <Text style={{ fontSize: 22 }}>{detail.nama}</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>Rp. {detail.harga}</Text>
                    <Card.Divider />
                    <ScrollView style={{ height: hp(10), marginBottom: hp(2) }}>
                        <Text style={{ textAlign: "justify" }}>{detail.deskripsi}</Text>
                    </ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Button type="outline" icon={
                            <Icon type="feather" name="minus" size={16} />
                        }
                            disabled={qty == 1}
                            onPress={btDec}
                        />
                        <Input placeholder="Qty" keyboardType="numeric"
                            containerStyle={{ width: wp(25) }}
                            inputStyle={{ textAlign: "center" }}
                            onChangeText={(e) => setQty(parseInt(e))}
                            defaultValue={qty.toString()}
                        />
                        <Button type="outline"
                            icon={
                                <Icon type="feather" name="plus" size={16} />
                            }
                            onPress={btInc}
                        />
                    </View>
                    <Button
                        title="Add To Cart"
                        icon={
                            <Icon
                                name="shopping-cart"
                                type="feather"
                                color="white"
                                size={16}
                                containerStyle={{ marginHorizontal: wp(4) }}
                            />
                        }
                        iconRight
                        onPress={btAddToCart}
                    />
                </Card>
            </View>
        </KeyboardAvoidingView>
    )
}

export default DetailPage