import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Badge, Card, ListItem, Text, Icon, Overlay } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useDispatch, useSelector } from 'react-redux';
import { logOutAction } from "../redux/actions";
import ImagePicker from "react-native-image-crop-picker"

const AccountPage = (props) => {

    const dispatch = useDispatch()

    const { username, email } = useSelector((state) => {
        return {
            username: state.userReducer.username,
            email: state.userReducer.email
        }
    })

    const [menu, setMenu] = useState({
        account: [
            {
                title: "Edit Profile",
                icon: "account-edit",
                press: () => { }
            },
            {
                title: "Transactions",
                icon: "cart",
                press: () => props.navigation.navigate("Transactions")
            },
            {
                title: "Promo",
                icon: "card-bulleted-outline",
                press: () => { }
            }
        ],
        setting: [
            {
                title: "Configuration",
                icon: "cog-outline",
                press: () => { }
            },
            {
                title: "Privacy and Police",
                icon: "shield-account",
                press: () => { }
            },
            {
                title: "Logout",
                icon: "logout",
                press: () => dispatch(logOutAction())
            }
        ]
    })

    const [visible, setVisible] = useState(false)

    // state untuk menyimpan alamat gambar
    const [gambar, setGambar] = useState("https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg")
    const printListMenu = (listMenu) => {
        return listMenu.map((item, idx) => {
            return <ListItem
                key={idx}
                onPress={item.press}
            >
                <Icon name={item.icon} size={25} type="material-community" />
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={hp(5)} />
            </ListItem>
        })
    }

    useEffect(() => {
        if (!username) {
            props.navigation.reset({
                index: 0,
                routes: [{ name: "Login" }]
            })
        }
    })

    // Fungsi access camera

    const btCamera = () => {
        ImagePicker.openCamera({
            width: wp(40),
            height: wp(40),
            cropping: true,
            mediaType: "photo"
        }).then((image) => {
            console.log("Image from camera :", image)
        }).catch((err) => {
            console.log(err)
        })
    }

    let { account, setting } = menu
    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(7) }}>
            <ImageBackground source={{ uri: "https://img4.goodfon.com/wallpaper/nbig/a/45/ralli-moto-dakar-dakar-sport-rally-skorost-pesok-gonshchik-m.jpg" }}
                style={{ width: wp(100), height: hp(40) }}
            >
                <View style={style.imgBackground}>
                    <Avatar
                        source={{ uri: gambar }}
                        size={120}
                        rounded
                    >
                        <Avatar.Accessory
                            name="edit"
                            size={35}
                            iconStyle={{ fontSize: 20 }}
                            onPress={() => setVisible(!visible)}
                        />
                    </Avatar>
                    <Text h3 style={{ color: "white" }}>{username}</Text>
                    <Text style={{ color: "white" }}>{email}</Text>
                </View>
            </ImageBackground>
            <Card containerStyle={style.cardListMenu}>
                <Badge value="Verified Account" />
                <ScrollView>
                    <Text h4>Account</Text>
                    {printListMenu(account)}
                    <Text h4>Setting</Text>
                    {printListMenu(setting)}
                </ScrollView>
            </Card>
            <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
                <ListItem containerStyle={{ width: wp(68) }}>
                    <Icon name="folder" type="feather" />
                    <ListItem.Content>
                        <ListItem.Title>Select from Gallery</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={wp(8)} />
                </ListItem>
                <ListItem containerStyle={{ width: wp(68) }} onPress={btCamera}>
                    <Icon name="camera" type="feather" />
                    <ListItem.Content>
                        <ListItem.Title>Open Camera</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron size={wp(8)} />
                </ListItem>
            </Overlay>
        </View>
    )
};

const style = StyleSheet.create({
    imgBackground: {
        backgroundColor: "rgba(0,0,0,0.5)",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    cardListMenu: {
        flex: 1,
        margin: 0,
        marginTop: hp(-5),
        borderTopRightRadius: wp(10),
        borderTopLeftRadius: wp(10)
    }
})

export default AccountPage