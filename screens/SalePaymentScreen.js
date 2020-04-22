import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ScreenHeader from '../components/ScreenHeader';
import { TextInput } from 'react-native-gesture-handler';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const SalePaymentScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScreenHeader navigation={navigation} />
            <View style={styles.subContainer}>

                <Text style={styles.title}>
                    Payment Detail
                </Text>

                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Tax
                    </Text>
                    <Text style={styles.text}>
                        100000
                    </Text>
                </View>

                <View style={styles.viewWidth} />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Discount
                    </Text>
                    <Text style={styles.text}>
                        100000
                    </Text>
                </View>

                <View style={styles.viewWidth} />

                <View style={styles.textContainer}>
                    <Text style={styles.text}>
                        Total
                    </Text>
                    <Text style={styles.text}>
                        100000
                    </Text>
                </View>

                <View style={styles.viewWidth} />

                {/* <View style={{ marginTop: hp(1) }}>
                    <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer}>
                        <Text style={styles.button}>
                            Add Draft
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.6} style={styles.buttonContainer}>
                        <Text style={styles.button}>
                            Payment
                        </Text>

                    </TouchableOpacity>
                </View> */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>
                        Quotation Proposal
                    </Text>
                </View>

                <TextInput autoCorrect={false} multiline={true} style={styles.input} />


                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}>
                        Add Order
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Expenses', { screen: 'manageExpense' })} style={styles.navigationButton}>
                <Image source={require('../assets/images/preview.png')} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    subContainer: {
        marginTop: hp(2)
    },
    title: { 
        textAlign: 'center', 
        fontSize: hp(4), 
        fontFamily: medium 
    },
    textContainer: { 
        flexDirection: 'row', 
        width: wp(85), 
        justifyContent: 'space-between', 
        alignSelf: 'center', 
        marginTop: hp(3) 
    },
    text: { 
        fontSize: hp(2.5), 
        fontFamily: medium 
    },
    viewWidth: { 
        borderWidth: 1, 
        width: wp(90), 
        alignSelf: 'center', 
        marginTop: hp(.5) 
    },
    titleContainer: { 
        alignSelf: 'center', 
        marginTop: hp(4) 
    },
    titleText: { 
        fontSize: hp(3), 
        fontFamily: medium 
    },
    input: { 
        borderWidth: 2, 
        width: wp(80), 
        height: hp(20), 
        alignSelf: 'center', 
        marginTop: hp(3.5), 
        marginBottom: hp(3), 
        fontFamily: book,
        fontSize: hp('2.2%'),
        paddingLeft: wp('2%'),
        textAlignVertical: 'top' 
    },
    buttonContainer: { 
        backgroundColor: '#F3A419', 
        borderWidth: 1.2, 
        borderColor: '#707070', 
        borderRadius: hp(10),
        width: wp(55),
        alignSelf: 'center',
        marginTop: hp(2) 
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
        right: wp(3),
        flex: 1,
        justifyContent: 'flex-end',
        alignSelf: 'flex-end'
    }
});

export default SalePaymentScreen;