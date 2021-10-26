import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, Input, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const RegisPage = (props) => {

    return (
        <View style={style.container}>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 18 }}>
                Create Account
            </Text>
            <View style={style.form}>
                <Input placeholder="Username"
                    leftIcon={<Icon name="user" type="feather" />}
                />
                <Input placeholder="Email"
                    leftIcon={<Icon name="mail" type="feather" />}
                />
                <Input placeholder="Password"
                    leftIcon={<Icon name="lock" type="feather" />}
                    secureTextEntry
                />
                <Input placeholder="Confirm. Password"
                    leftIcon={<Icon name="lock" type="feather" />}
                    secureTextEntry
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#dcdde1",
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        width: wp(70),
        alignItems: "center",
        margin: hp(5)
    }
})
export default RegisPage