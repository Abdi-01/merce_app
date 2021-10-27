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

    const btRegis = async () => {
        try {
            if (username == "" || email == "" || password == "" || confPass == "") {
                Alert.alert("Warning ⚠️", "Fill in the form")
            } else {
                if (email.includes("@")) {
                    if (password == confPass) {
                        console.log(username, email, password, confPass);

                        setUsername("")
                        setEmail("")
                        setPassword("")
                        setConfPass("")
                        Alert.alert("Success ✅", "Register Success")
                        props.navigation.goBack()

                    } else {
                        Alert.alert("Warning ⚠️", "Password not same")
                    }
                } else {
                    Alert.alert("Warning ⚠️", "Your email is wrong")
                }
            }

        } catch (error) {
            console.log(error)
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