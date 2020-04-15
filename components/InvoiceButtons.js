import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const medium = 'AirbnbCerealMedium';

const InvoiceButtons = () => {
    return (
        <>
        <View style={styles.allButtonContainer}>
            <TouchableOpacity style={{...styles.buttonContainer, width: wp(20), marginLeft: wp(3) }}>
                <Text style={styles.button}>
                    SMS
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonContainer, width: wp(23), marginLeft: wp(1.5) }}>
                <Text style={styles.button}>
                    Email
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonContainer, width: wp(34), marginLeft: wp(2) }}>
                <Text style={styles.button}>
                    Edit Invoice
                </Text>
            </TouchableOpacity>
        </View>
        <View style={{...styles.allButtonContainer, marginTop: hp(2)}}>
            <TouchableOpacity style={{ ...styles.buttonContainer, width: wp(45), height: hp(6.5), marginLeft: wp(4) }}>
                <Text style={{ ...styles.button, padding: hp(1.25) }}>
                    Make Payment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.buttonContainer, width: wp(45), height: hp(6.5), marginLeft: wp(2) }}>
                <Text style={{ ...styles.button, padding: hp(1.25) }}>
                    Change Status
                </Text>
            </TouchableOpacity>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    allButtonContainer: { 
        marginTop: hp(3), 
        flexDirection: 'row' 
    },
    buttonContainer: {
        backgroundColor: '#F3A419', 
        borderWidth: 1, 
        borderColor: '#707070',
        borderRadius: hp(10) 
    },
    button: { 
        textAlign: 'center',  
        padding: hp(1.2), 
        fontSize: hp(2.5), 
        fontFamily: medium, 
        fontWeight: 'bold' 
    }
});

export default InvoiceButtons;