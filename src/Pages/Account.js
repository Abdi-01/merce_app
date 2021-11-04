import React from 'react';
import { View } from 'react-native'
import { Text } from 'react-native-elements';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const AccountPage = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: "white", paddingTop: hp(10) }}>
            <Text>Acoount Page</Text>
        </View>
    )
};

export default AccountPage