import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Badge, Button, Card, Overlay, Text } from 'react-native-elements';
import { API_URL } from '../helper';
import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

    const getUserTransactions = async () => {
        try {
            // mengambil data user dar asyncstorage
            let check = await AsyncStorage.getItem("data")
            
            // pemeriksaan jika data user didapatkan
            if (check) {
                // merubah data user pada varible check yg brupa string menjadi object, 
                // dan kemudian di destructure property id dari data user
                let { id } = JSON.parse(check);
                console.log("iduser",id)
                // get data transaksi
                let get = await axios.get(API_URL + `/userTransactions?iduser=${id}`)

                if (get.data) {
                    // menyimpan data pada state
                    setListTransaksi(get.data)
                    console.log("user transactions", get.data)
                }
            }
        } catch (error) {
            console.log(error)
        }
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
        console.log(selectedIdx)
        if (selectedIdx >= 0 && selectedIdx !== null) {
            return listTransaksi[selectedIdx].detail.map((value, index) => {
                return <Card containerStyle={{ width: wp(90), margin: 0 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Text style={{ width: wp(28), textAlign: "center" }}>{value.nama}</Text>
                        <Text style={{ width: wp(34), textAlign: "center" }}>{value.qty}</Text>
                        <Text style={{ width: wp(30), textAlign: "center" }}>Rp. {value.subTotal}</Text>
                    </View>
                </Card>
            })
        }
    }

    return (
        <View>
            {renderTransaksi()}
            <Overlay visible={visible} onBackdropPress={() => {
                setVisible(!visible)
                setSelectedIdx(null)
            }}>
                <Text h4 style={{ textAlign: "center", marginVertical: hp(2) }}>Detail Transaction</Text>
                <Card containerStyle={{ width: wp(90), margin: 0 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Text style={{ width: wp(28), textAlign: "center" }}>Name</Text>
                        <Text style={{ width: wp(34), textAlign: "center" }}>Qty</Text>
                        <Text style={{ width: wp(32), textAlign: "center" }}>Sub. Total</Text>
                    </View>
                </Card>
                {renderDetailTransaksi()}
                {
                    selectedIdx >= 0 && selectedIdx !== null ?
                        <View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: hp(2) }}>
                                <Text style={{ fontSize: 20, color: "gray" }}>Note</Text>
                                <Text style={{ fontSize: 20, color: "skyblue" }}>{listTransaksi[selectedIdx].note}</Text>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between", marginVertical: hp(2) }}>
                                <Text style={{ fontSize: 20, color: "gray" }}>Total Payment</Text>
                                <Text style={{ fontSize: 20, color: "skyblue", fontWeight: "bold" }}>Rp. {listTransaksi[selectedIdx].totalPayment}</Text>
                            </View>
                        </View> : null
                }
            </Overlay>
        </View>
    )
}

export default TransactionsPage;