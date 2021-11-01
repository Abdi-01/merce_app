import React from 'react';
import { FlatList, Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Card, Icon, Input, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const DetailPage = (props) => {
    const { detail } = props.route.params
    return (
        <KeyboardAvoidingView behavior="position" style={{ flex: 1, backgroundColor: "white" }}>
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
                    <Card.Divider/>
                    <ScrollView style={{height:hp(10), marginBottom:hp(2)}}>
                        <Text style={{ textAlign: "justify"}}>{detail.deskripsi}</Text>
                    </ScrollView>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems:"center" }}>
                        <Button type="outline" icon={
                            <Icon type="feather" name="minus" size={16} />
                        } />
                        <Input placeholder="Qty" keyboardType="numeric"
                            containerStyle={{ width: wp(25) }}
                        />
                        <Button type="outline" icon={
                            <Icon type="feather" name="plus" size={16} />
                        } />
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
                    />
                </Card>
            </View>
        </KeyboardAvoidingView>
    )
}

export default DetailPage