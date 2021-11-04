import React from 'react';
import { ImageBackground, View } from 'react-native'
import { Avatar, Text } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const AccountPage = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(7) }}>
            <ImageBackground source={{ uri: "https://img4.goodfon.com/wallpaper/nbig/a/45/ralli-moto-dakar-dakar-sport-rally-skorost-pesok-gonshchik-m.jpg" }}
                style={{ width: wp(100), height: hp(40) }}
            >
                <View style={{ backgroundColor: "rgba(0,0,0,0.5)", height: "100%", justifyContent: "center", alignItems: "center" }}>
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
        </View>
    )
};

export default AccountPage