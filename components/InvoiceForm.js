import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const InvoiceForm = () => {
    return (
        <>
            <View style={{ ...styles.flex, marginTop: hp(2.5) }}>
                <View style={styles.marginLeft}>
                    <Text style={styles.text}>
                        Invoice
                    </Text>
                    <Text style={styles.text}>
                        Invoice Date
                    </Text>
                    <Text style={{...styles.text, marginTop: hp(1) }}>
                        Customer
                    </Text>
                </View>
                <View style={styles.text2}>
                    <Text style={styles.text}>
                        #INV 1008
                    </Text>
                    <Text style={styles.text}>
                        4-15-2020
                    </Text>
                    <Text style={styles.text}>
                        Mughal Motor Worshop DuLLLanBangla
                    </Text>
                </View>
            </View>
            <View style={styles.viewWidth} />
            <View style={{... styles.secondSection, marginTop: hp(2) }}>
                <Text style={styles.secondSectionFirst}>
                    Description
                </Text>
                <View style={styles.secondSectionSub}>
                    <Text style={styles.medium}>
                        Qty
                    </Text>
                    <Text style={styles.medium}>
                        SubTotal
                    </Text>
                </View>
            </View>
            <View style={styles.viewWidth} />
            <View style={{ ... styles.secondSection, marginTop: hp(1.5) }}>
                <Text style={{ ...styles.secondSectionFirst, fontFamily: book, width: wp(40) }}>
                    MAX (SMO-126) WAGON R-MAX-01
                </Text>
                <View style={styles.secondSectionSub}>
                    <Text>
                        1.00
                    </Text>
                    <Text style={styles.secondSectionSub2}>
                        100,000 pkr
                    </Text>
                </View>
            </View>
            
            <View style={{...styles.viewWidth, marginTop: hp(3.5) }} />

            <View style={{ ...styles.flex, marginTop: hp(3) }}>
                <View style={styles.marginLeft}>
                    <Text style={styles.amountText1}>
                        Total Tax
                    </Text>
                    <Text style={styles.amountText}>
                        Total Discount
                    </Text>
                    <Text style={styles.amountText}>
                        Total
                    </Text>
                    <Text style={styles.amountText}>
                        Current Milage
                    </Text>
                    <Text style={styles.amountText}>
                        Oil Milage
                    </Text>
                    <Text style={styles.amountText}>
                        Next Change
                    </Text>
                </View>
                <View style={styles.marginLeft}>
                    <Text style={styles.amountText1}>
                        Pkr 00000
                    </Text>
                    <Text style={styles.amountText}>
                        Pkr 11.0000
                    </Text>
                    <Text style={styles.amountText}>
                        Pkr 1.0000
                    </Text>
                    <Text style={styles.amountText}>
                        0
                    </Text>
                    <Text style={styles.amountText}>
                        0
                    </Text>
                    <Text style={styles.amountText}>
                        0
                    </Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    secondSection: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: wp(80), 
        alignSelf: 'center'
    }, 
    flex: {
        flexDirection: 'row'
    },
    text: { 
        fontSize: hp(2.25), 
        fontFamily: book,
        marginTop: hp(.3) 
    },
    secondSectionFirst: { 
        fontFamily: medium, 
        marginLeft: wp(4) 
    },
    viewWidth: {
        borderWidth: 1,
        width: wp(80),
        alignSelf: 'center',
        marginTop:hp(2),
        borderColor: '#BFBFBF'
    },
    secondSectionSub: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: wp(26), 
        marginRight: wp(4) 
    },
    secondSectionSub2: { 
        width: wp(15), 
        textAlign: 'center' 
    },
    amountText1: { 
        fontFamily: medium, 
        fontSize: hp(2.3) 
    },
    amountText: { 
        fontFamily: medium, 
        fontSize: hp(2.3), 
        marginTop: hp(.5) 
    },
    text2: {
        marginLeft: wp(2.5), 
        width: wp(49) 
    },
    medium: { 
        fontFamily: medium 
    },
    marginLeft: { 
        marginLeft: wp(5) 
    }
});

export default InvoiceForm;