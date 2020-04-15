import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ScreenHeader from '../components/ScreenHeader';
import InvoiceButtons from '../components/InvoiceButtons';
import InvoiceForm from '../components/InvoiceForm';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const InvoiceScreen = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <ScreenHeader navigation={navigation} />
                
                <InvoiceButtons />

                <View style={styles.subContainer}>

                    <View style={styles.logoImgContainer}>
                        <Image source={require('../assets/images/logo_gujjar_oil.png')} />
                    </View>

                    <Text style={styles.logoText}>
                        Gujjar Oil Traders
                    </Text>
                    
                    <InvoiceForm />

                    <View style={styles.viewWidth} />

                    <TouchableOpacity onPress={() => navigation.navigate('invoice')}  style={styles.doneButtonContainer}>
                        <Text style={styles.doneButton}>
                            Print
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.viewWidth} />

                    <Text style={styles.thankyouText}>Thank you for shopping !</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE6E2'
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: hp(3),
        width: wp(86),
        alignSelf: 'center',
        marginBottom: hp(3),
    },
    logoImgContainer: {
        marginTop: hp('3.5%'),
        alignItems: 'center' 
    },
    logoText: { 
        marginTop: hp(3), 
        textAlign: 'center', 
        fontSize: hp(3), 
        fontFamily: medium, 
        fontWeight: 'bold' 
    },
    viewWidth: {
        borderWidth: 1,
        width: wp(80),
        alignSelf: 'center',
        marginTop:hp(2),
        borderColor: '#BFBFBF'
    },
    doneButtonContainer: {  
        marginTop: hp(2),
        backgroundColor: '#F3A419', 
        width: wp(25),
        borderWidth: 1.2, 
        borderColor: '#707070', 
        borderRadius: hp(10),
        alignSelf: 'center'
    },
    doneButton: { 
        fontFamily: medium, 
        textAlign: 'center', 
        padding: 8, 
        fontSize: hp(2.2)
    },
    thankyouText: { 
        textAlign: 'center', 
        marginTop: hp(1.5), 
        marginBottom: hp(2), 
        fontFamily: book 
    }
});

export default InvoiceScreen;