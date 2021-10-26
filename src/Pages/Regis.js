import axios from 'axios';
import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { API_URL } from '../helper'

const RegisPage = (props) => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confPass, setConfPass] = useState("")

    const btRegis = () => {
        if (username == "" || email == "" || password == "" || confPass == "") {
            Alert.alert("Warning ⚠️", "Fill in the form")
        } else {
            if (email.includes("@")) {
                if (password == confPass) {
                    console.log(username, email, password, confPass);
                    axios.post(API_URL + "/users", {
                        username,
                        email,
                        password,
                        role: "user",
                        cart: []
                    })
                        .then((res) => {
                            if (res.data) {
                                setUsername("")
                                setEmail("")
                                setPassword("")
                                setConfPass("")
                                Alert.alert("Success ✅", "Register Success")
                                props.navigation.goBack()
                            }
                        }).catch((err) => {
                            console.log(err)
                        })
                } else {
                    Alert.alert("Warning ⚠️", "Password not same")
                }
            } else {
                Alert.alert("Warning ⚠️", "Your email is wrong")
            }
        }
    }
    return (
        <View style={style.container}>
            <Text style={{ color: "gray", fontWeight: "bold", fontSize: 18 }}>
                Create Account
            </Text>
            <View style={style.form}>
                <Input placeholder="Username"
                    onChangeText={(val) => setUsername(val)}
                    leftIcon={<Icon name="user" type="feather" />}
                />
                <Input placeholder="Email"
                    onChangeText={(val) => setEmail(val)}
                    leftIcon={<Icon name="mail" type="feather" />}
                />
                <Input placeholder="Password"
                    onChangeText={(val) => setPassword(val)}
                    leftIcon={<Icon name="lock" type="feather" />}
                    secureTextEntry
                />
                <Input placeholder="Confirm. Password"
                    onChangeText={(val) => setConfPass(val)}
                    leftIcon={<Icon name="lock" type="feather" />}
                    secureTextEntry
                />
                <Button
                    title="Sign Up"
                    type="outline"
                    containerStyle={{ width: wp(65) }}
                    onPress={btRegis}
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