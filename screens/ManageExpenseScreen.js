import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

let width =  Dimensions.get('window').width;

import ScreenHeader from '../components/ScreenHeader';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const ManageExpenseScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenHeader navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Expense Detail
                </Text>
            </View>

            <View style={{ marginTop: hp(5), width: wp(90), alignSelf: 'center' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(15), padding: 10 }}>
                        No
                    </Text>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(22.5), padding: 10 }}>
                        #
                    </Text>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(30), padding: 10 }}>
                        Date
                    </Text>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, width: wp(22.5), padding: 10 }}>
                        Total
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(15), padding: 10 }}>
                        1
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(22.5), padding: 10 }}>
                        1003
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(30), padding: 10 }}>
                        03-12-2019
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, width: wp(22.5), padding: 10 }}>
                        Pkr 500
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(15), padding: 10 }}>
                        2
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(22.5), padding: 10 }}>
                        1002
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, borderRightWidth: 0, width: wp(30), padding: 10 }}>
                        03-12-2019
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderBottomWidth: 0, width: wp(22.5), padding: 10 }}>
                        Pkr 500
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, borderRightWidth: 0, width: wp(15), padding: 10 }}>
                        3
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1,  borderRightWidth: 0, width: wp(22.5), padding: 10 }}>
                        1001
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1,  borderRightWidth: 0, width: wp(30), padding: 10 }}>
                        03-12-2019
                    </Text>
                    <Text style={{ fontFamily: book, textAlign: 'center', borderWidth: 1, width: wp(22.5), padding: 10 }}>
                        Pkr 500
                    </Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderTopWidth: 0, borderRightWidth: 0, width: wp(15), padding: 10 }}>
                        No
                    </Text>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderTopWidth: 0, borderRightWidth: 0, width: wp(22.5), padding: 10 }}>
                        #
                    </Text>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderTopWidth: 0, borderRightWidth: 0, width: wp(30), padding: 10 }}>
                        Date
                    </Text>
                    <Text style={{ fontFamily: medium, fontSize: hp(2.4), textAlign: 'center', borderWidth: 1, borderTopWidth: 0, width: wp(22.5), padding: 10 }}>
                        Total
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navigationLeftButton}>
                <Image source={require('../assets/images/previewLeft.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('invoice')} style={styles.navigationRightButton}>
                <Image source={require('../assets/images/preview.png')} />
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleContainer: { alignSelf: 'center', marginTop: hp(4) },
    titleText: { fontSize: hp(3), fontFamily: medium },
    navigationLeftButton: {
        bottom : hp(2.5),
        position: 'absolute',
        left: wp(3),
    },
    navigationRightButton: {
        bottom : hp(2.5),
        position: 'absolute',
        right: wp(3),
    }
});

export default ManageExpenseScreen;

