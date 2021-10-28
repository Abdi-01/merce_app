import React from 'react';
import { Card } from 'react-native-elements';

const CardProduct = (props) => {

    return (
        <Card>
            <Card.Image source={{ uri: props.data.images[0] }} style={{ height: 175 }} />
        </Card>
    )
}

export default CardProduct