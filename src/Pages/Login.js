import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Image, Input, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const LoginPage = (props) => {

    const btToRegis = () => {
        props.navigation.navigate("Regis")
    }

    return (
        <View style={style.container}>
            <Image source={{ uri: "https://www.sipayo.com/wp-content/uploads/2017/12/e-commerce.png" }}
                style={{ width: wp("70%"), height: hp("30%") }} />
            <View >
                <Input
                    placeholder="username"
                    inputStyle={{ backgroundColor: "white" }}
                    leftIcon={
                        <Icon
                            type="feather"
                            name="user"
                        />
                    }
                    inputContainerStyle={{ backgroundColor: "white" }}
                    containerStyle={{ width: wp("70%") }}
                />
                <Input
                    placeholder="password"
                    inputStyle={{ backgroundColor: "white" }}
                    leftIcon={
                        <Icon
                            type="feather"
                            name="lock"
                        />
                    }
                    inputContainerStyle={{ backgroundColor: "white" }}
                    containerStyle={{ width: wp("70%") }}
                    secureTextEntry
                />
                <Button
                    title="Sign In"
                    containerStyle={{ width: wp("60%"), alignSelf: "center" }}
                />
            </View>
            <Text style={style.textA}>Not have account ?
                <Text style={style.textRegis}
                    onPress={btToRegis}
                >Register Now</Text>
            </Text>
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
    textA: {
        padding: hp(2),
        color: "gray"
    },
    textRegis: {
        color: "#00a8ff",
        fontWeight: "bold"
    }
})

export default LoginPage