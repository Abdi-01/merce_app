import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Image, Input, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useDispatch } from 'react-redux';
import { loginAction } from '../redux/actions';

const LoginPage = (props) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState("")
    const [password, setPass] = useState("")

    const btToRegis = () => {
        props.navigation.navigate("Regis")
    }

    const btLogin = () => {
        dispatch(loginAction(username, password))
    }

    return (
        <View style={style.container}>
            <Image source={{ uri: "https://www.sipayo.com/wp-content/uploads/2017/12/e-commerce.png" }}
                style={{ width: wp("40%"), height: hp("22%") }}
            />
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
                    onChangeText={val => setUsername(val)}
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
                    onChangeText={val => setPass(val)}
                />
                <Button
                    title="Sign In"
                    containerStyle={{ width: wp("60%"), alignSelf: "center" }}
                    onPress={btLogin}
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