import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ScreenHeader from '../components/ScreenHeader';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const POSScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenHeader navigation={navigation} />
            <View style={styles.subContainer}>
                <View style={styles.topImageContainer}>
                    <TouchableOpacity style={styles.paymentImageContainer}>
                        <Image source={require('../assets/images/dollar_icn.png')} />
                        <Image source={require('../assets/images/Payment.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.posImageContainer}>
                        <Image source={require('../assets/images/sale_cal_icn.png')} />
                        <Image source={require('../assets/images/POS.png')} />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.salesImageContainer}>
                    <Image source={require('../assets/images/sale_icn.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconImageContainer}>
                    <Image source={require('../assets/images/icn_add.png')} style={styles.iconImage} />
                </TouchableOpacity>
            
                <View style={styles.bottomImageContainer}>
                    <TouchableOpacity style={styles.quotationImageContainer}>
                            <Image source={require('../assets/images/quotation_icn.png')} style={styles.quotationImage} />
                            <Image source={require('../assets/images/quotation.png')} style={styles.quotationtext}  />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.subscribeImageContainer}> 
                        <Image source={require('../assets/images/subscribe_icn.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3A419'
    },
    subContainer: { 
        flex: 1, 
        justifyContent: 'center' 
    },
    topImageContainer: { 
        flexDirection: 'row', 
        alignSelf: 'flex-end', 
        marginTop: hp(-8)
    },
    paymentImageContainer: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginRight: wp(8),
        marginTop: hp(4) 
    },
    posImageContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
         marginRight: wp(6), 
        marginTop: hp(-1) 
    },
    salesImageContainer: { 
        marginLeft: wp(3), 
        marginTop: hp(-3), 
        width: wp(27), 
        alignItems:'center' 
    },
    iconImageContainer: { 
        height: hp(25),
        width: wp(49),
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: hp(-1),
        borderRadius: hp(20)
    },
    iconImage: { 
        marginTop: hp(8) 
    },
    bottomImageContainer: { 
        flexDirection: 'row', 
        width: wp(102), 
        justifyContent: 'space-between' 
    },
    quotationImageContainer: { 
        marginTop: hp(2), 
        alignItems: 'center', 
    },
    quotationImage: {  
        marginLeft: wp(11) 
    },
    quotationtext: {  
        marginLeft: wp(9) 
    },
    subscribeImageContainer: { 
        alignSelf: 'flex-end', 
        marginRight: wp(10) 
    }
});

export default POSScreen;