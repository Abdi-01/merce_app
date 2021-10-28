import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import { Button, Header, Icon, Image, SearchBar, Text } from "react-native-elements"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../redux/actions';

const HomePage = (props) => {

    const [banner, setBanner] = useState([
        "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/3-pengorbanan-gokil-masyarakat-manfaatkan-promo-e-commerce.jpg",
        "https://asset-a.grid.id/crop/0x0:0x0/700x0/photo/2019/09/09/4070068564.jpeg",
        "https://statik.tempo.co/data/2018/05/14/id_705289/705289_720.jpg"
    ])

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
        <View style={{ flex: 1, backgroundColor: "#dcdde1" }}>
            <Header
                placement="left"
                centerComponent={
                    <SearchBar
                        placeholder="Search Product"
                        containerStyle={style.searchBar}
                        inputContainerStyle={style.inputSearch}
                    />
                }
                rightComponent={
                    <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
                        <Icon name="heart" type="feather" size={22}
                            iconStyle={{ color: "white" }} style={{ marginHorizontal: wp(2) }}
                        />
                        <Icon name="bell" type="feather" size={22}
                            iconStyle={{ color: "white" }} style={{ marginHorizontal: wp(2) }}
                        />
                        <Icon name="message-circle" type="feather" size={22}
                            iconStyle={{ color: "white" }} style={{ marginHorizontal: wp(2) }}
                        />
                    </View>
                }
            />
            <View>
                <FlatList
                    data={banner}
                    renderItem={
                        ({ item }) => (
                            <Image source={{ uri: item }} style={{ width: wp(90), height: hp(25) }} />
                        )
                    }
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <Text h2>Home Page</Text>

        </View>
    )
}

const style = StyleSheet.create({
    searchBar: {
        backgroundColor: "transparent",
        width: wp(65),
        borderTopWidth: 0,
        borderBottomWidth: 0,
        padding: 0,
        marginLeft: wp(-5)
    },
    inputSearch: {
        backgroundColor: "white",
        height: hp(6)
    }
})

export default HomePage