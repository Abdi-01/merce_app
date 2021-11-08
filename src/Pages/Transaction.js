import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Badge, Button, Card, Overlay, Text } from 'react-native-elements';
import { API_URL } from '../helper';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TransactionsPage = () => {
    // 1. Mengambil data userTransactions dari json-server
    // 2. Kemudian, datanya disimpan pada state
    // 3. dirender pada tampilan page

    // membuat state pada functional component menggunakan ⚠️useState⚠️

    // Kerangka state pada functional component
    // const [namaState, namaSetState]=useState("nilai defaultnya apa ?")
    // ⚠️namaState⚠️ pada functional component == ⚠️this.state{}⚠️ pada class component
    // ⚠️namaSetState⚠️ pada functional component == ⚠️this.setState({})⚠️ pada class component

    const [listTransaksi, setListTransaksi] = useState([]);
    const [visible, setVisible] = useState(false);

    const [selectedIdx, setSelectedIdx] = useState(null)

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

    const renderTransaksi = () => {
        console.log(listTransaksi)
        return listTransaksi.map((value, index) => {
            return (
                <Card >
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                        <Text>{value.date}</Text>
                        <Text>Rp. {value.totalPayment}</Text>
                        <Badge
                            value={value.status}
                            status="warning"
                        />
                        <Button
                            title="Detail"
                            type="clear"
                            onPress={() => {
                                // set visible modal yang awalnya false dinegasi menjadi true
                                setVisible(!visible);
                                // set index data transaksi yang dipilih
                                setSelectedIdx(index)
                            }}
                        />
                    </View>
                </Card>
            )
        })
    }

    const renderDetailTransaksi = () => {
        return listTransaksi[selectedIdx].detail.map((value, index) => {
            return <Card containerStyle={{ width: wp(90), margin: 0 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                    <Text style={{textAlign:"center"}}>{value.nama}</Text>
                    <Text style={{textAlign:"center"}}>{value.qty}</Text>
                    <Text style={{textAlign:"center"}}>Rp. {value.subTotal}</Text>
                </View>
            </Card>
        })
    }

    return (
        <View>
            {renderTransaksi()}
            <Overlay visible={visible} onBackdropPress={() => setVisible(!visible)}>
                <Text style={{ textAlign: "center" }}>Detail Transaction</Text>
                <Card containerStyle={{ width: wp(90), margin: 0 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{textAlign:"center"}}>Name</Text>
                        <Text style={{textAlign:"center"}}>Qty</Text>
                        <Text style={{textAlign:"center"}}>Sub. Total</Text>
                    </View>
                </Card>
                {renderDetailTransaksi()}
            </Overlay>
        </View>
    )
}

export default TransactionsPage;