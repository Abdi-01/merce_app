import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native'
import { Avatar, Badge, Card, ListItem, Text, Icon } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const AccountPage = (props) => {

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
                press: () => { }
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
                press: () => { }
            }
        ]
    })

    const printListMenu = () => {
        let { account } = menu
        return account.map((item, idx) => {
            return <ListItem
                key={idx}
                onPress={item.press}
            >
                <Icon name={item.icon} size={25} type="material-community" />
                <ListItem.Content>
                    <ListItem.Title>{item.title}</ListItem.Title>
                </ListItem.Content>
                <ListItem.Chevron size={hp(5)}/>
            </ListItem>
        })
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(7) }}>
            <ImageBackground source={{ uri: "https://img4.goodfon.com/wallpaper/nbig/a/45/ralli-moto-dakar-dakar-sport-rally-skorost-pesok-gonshchik-m.jpg" }}
                style={{ width: wp(100), height: hp(40) }}
            >
                <View style={style.imgBackground}>
                    <Avatar
                        source={{ uri: "https://api.duniagames.co.id/api/content/upload/file/8143860661599124172.jpg" }}
                        size={120}
                        rounded
                    >
                        <Avatar.Accessory
                            name="edit"
                            size={35}
                            iconStyle={{ fontSize: 20 }}
                        />
                    </Avatar>
                    <Text h3 style={{ color: "white" }}>Eduardo</Text>
                </View>
            </ImageBackground>
            <Card containerStyle={style.cardListMenu}>
                <Badge value="Verified Account" />
                <Text h4>Account</Text>
                {printListMenu()}
                <Text h4>Setting</Text>
            </Card>
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