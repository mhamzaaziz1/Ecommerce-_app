import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import { Icon, Picker, Form } from 'native-base';

import ScreenHeader from '../components/ScreenHeader';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const OrderPaymentScreen  = ({ navigation }) => {
    const [modal, setModal] = useState(false);

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

                <View style={{...styles.viewWidth, marginBottom : hp(3)}} />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.button}>
                        Add Draft
                    </Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => setModal(true)} style={styles.buttonContainer}>
                    <Text style={styles.button}>
                        Add Payment
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Expenses', { screen: 'manageExpense' })} style={styles.navigationButton}>
                <Image source={require('../assets/images/preview.png')} />
            </TouchableOpacity>

            <Modal isVisible={modal} hasBackdrop={false}>
                <View style={{ flex: 1, justifyContent: 'flex-end', width: wp(95), alignSelf: 'center'  }}>
                    <View style={{ backgroundColor: '#F25C05', borderRadius: 10 }}>
                        <View style={{ flexDirection: 'row', width: wp(81), justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginTop: hp(3.5) }}>
                            <Text style={{ fontSize: hp(3), fontFamily: medium, marginRight: wp(3), marginLeft: wp(1.5) }}>
                                Amount paid
                            </Text>
                            <TextInput style={{ borderWidth: 2, borderColor: '#F5A40A', width: wp(40), backgroundColor: 'white', padding: 2, height: 35 }} />
                        </View>
                        <View style={{ width: wp(81),flexDirection: 'row', alignItems: 'center', alignSelf: 'center', marginTop: hp(2), justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp(3), fontFamily: medium, marginRight: wp(3), marginLeft: wp(1.5) }}>
                                Method
                            </Text>
                            <Form style={{ borderWidth: 2, borderColor: '#F5A40A', backgroundColor: 'white', width: wp(40), padding: -25, height: 35, justifyContent: 'center'  }}>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    placeholderIconColor="red"
                                    // selectedValue={selected}
                                    // onValueChange={(value) => onValueChange(value)}
                                >
                                    <Picker.Item label="Europe" value="key0" />
                                    <Picker.Item label="ATM Card" value="key1" />
                                    <Picker.Item label="Debit Card" value="key2" />
                                    <Picker.Item label="Credit Card" value="key3" />
                                    <Picker.Item label="Net Banking" value="key4" />
                                </Picker>
                            </Form>
                        </View>
                        <TouchableOpacity style={{...styles.buttonContainer, width: wp(35), marginTop: hp(3) }}>
                            <Text style={styles.button}>
                                Pay Now
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModal(false)} style={{...styles.buttonContainer, marginBottom: hp(2.5), width: wp(35) }}>
                            <Text style={styles.button}>
                                Cancel
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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

export default OrderPaymentScreen;