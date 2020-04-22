import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

let width =  Dimensions.get('window').width;

import ScreenHeader from '../components/ScreenHeader';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const ExpenseDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenHeader navigation={navigation} />

            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>
                    Expense Detail
                </Text>
            </View>
            <View style={styles.subContainer}>
                <View style={styles.amountContainer}>
                    <Text style={styles.text}>
                        Amount
                    </Text>
                    <Text style={styles.text}>
                        100
                    </Text>
                </View>
                <View  style={styles.borderWidth} />
                <View style={{ ...styles.amountContainer, marginTop: hp(5) }}>
                    <Text style={styles.text}>
                        Note
                    </Text>
                    <Text style={styles.text}>
                        100
                    </Text>
                </View>
                <View  style={styles.borderWidth} />
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.button}>
                    Add Expense
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('manageExpense')} style={styles.navigationButton}>
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
    subContainer: { marginTop: hp(5), alignSelf: 'center', width: wp(90)},
    amountContainer: { flexDirection: 'row', justifyContent: 'space-between',  width: wp(86), alignSelf: 'center' },
    text: { fontSize: hp(2.5), fontFamily: medium },
    borderWidth: {borderBottomWidth: 1 },
    buttonContainer: { 
        backgroundColor: '#F3A419', 
        borderWidth: 1.2, 
        borderColor: '#707070', 
        borderRadius: hp(10),
        width: wp(55),
        alignSelf: 'center',
        marginTop: hp(5) 
    },
    button: { 
        fontSize: hp(3.5),
        padding: hp(1), 
        color: 'black',  
        fontFamily: medium,
        textAlign: 'center',
    },
    navigationButton: {
        bottom : hp(2.5),
        position: 'absolute',
        right: wp(3),
    }
});

export default ExpenseDetailScreen;

