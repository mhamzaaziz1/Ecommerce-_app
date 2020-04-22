import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ScreenHeader from '../components/ScreenHeader';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const SaleScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenHeader navigation={navigation} />

            <Text style={{ fontSize: hp(4), alignSelf: 'center', marginTop: hp(35), textAlign: 'center'}}>
                sales mai kn c screen ay gee
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default SaleScreen;