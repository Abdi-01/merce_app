import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { API_URL } from '../helper';
import axios from 'axios';

const TransactionsPage = () => {
    // 1. Mengambil data userTransactions dari json-server
    // 2. Kemudian, datanya disimpan pada state
    // 3. dirender pada tampilan page

    // membuat state pada functional component menggunakan ⚠️useState⚠️

    // Kerangka state pada functional component
    // const [namaState, namaSetState]=useState("nilai defaultnya apa ?")
    // ⚠️namaState⚠️ pada functional component == ⚠️this.state{}⚠️ pada class component
    // ⚠️namaSetState⚠️ pada functional component == ⚠️this.setState({})⚠️ pada class component

    const [listTransaksi, setListTransaksi]=useState([]);

    const getUserTransactions = () => {
        axios.get(API_URL + `/userTransactions`)
            .then((res) => {
                // menyimpan data pada state
                setListTransaksi(res.data)
                console.log("user transactions", res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getUserTransactions()
    }, [])

    const renderTransaksi=()=>{
        return listTransaksi.map((value,index)=>{
            // return(

            // )
        })
    }

    return (
        <View>
            <Text>Transactions Page</Text>
        </View>
    )
}

export default TransactionsPage;