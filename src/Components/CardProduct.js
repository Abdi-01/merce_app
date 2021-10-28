import React from 'react';
import { Button, Card } from 'react-native-elements';

const CardProduct = (props) => {

    return (
        <Card containerStyle={{ margin: 4 }}>
            <Card.Image source={{ uri: props.data.images[0] }} style={{ height: 140 }} />
            <Card.Title style={{ textAlign: "left", fontSize: 12, fontWeight: "100" }}>{props.data.nama}</Card.Title>
            <Card.Title style={{ marginVertical: -10, textAlign: "left", fontSize: 18 }} >Rp. {props.data.harga}</Card.Title>
            <Button
                title="Detail"
                onPress={props.toDetail}
            />
        </Card>
    )
}

export default CardProduct