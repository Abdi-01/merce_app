import React from 'react';
import { FlatList, Image, KeyboardAvoidingView, View } from 'react-native';
import { Card, Input, Text } from 'react-native-elements';
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
                        <Text style={{ textAlign: "justify", marginVertical: hp(1) }}>{detail.deskripsi}</Text>
                        <View>
                            <Input placeholder="Qty" />
                        </View>
                    </Card>
                </View>
        </KeyboardAvoidingView>
    )
}

export default DetailPage