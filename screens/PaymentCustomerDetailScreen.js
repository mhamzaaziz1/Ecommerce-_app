import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import InputPicker from '../components/InputPicker';
import InputText from '../components/InputText';
import ScreenHeader from '../components/ScreenHeader';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';


const PaymentCustomerDetailScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <ScreenHeader navigation={navigation} />

            <View style={styles.subContainer}>
                
                <Image source={require('../assets/images/Customer_Detail.png')} style={styles.subContainerImg} />
                
                <View style={styles.subSubContainer}>
                    <View>
                        <Text style={styles.text}>
                            Invoice ID
                        </Text>
                        <Text style={styles.text}>
                            Invoice Date
                        </Text>
                        <Text style={styles.text}>
                            Due Date
                        </Text>
                        <Text style={styles.text}>
                            Payment Terms
                        </Text>
                    </View>

                    <InputPicker pickerContainer={styles.pickerContainer} pickerStyle={styles.picker} />
                </View>

                <InputText />

                <View style={{ width: wp(90), flexDirection: 'row', justifyContent: 'space-between', marginTop: hp(5) }}>
                    <View>
                        <Text style={{ fontSize: hp(2.5), fontFamily: book, fontWeight: 'bold' }}>
                            Name
                        </Text>
                        <Text style={{ fontSize: hp(2.5), fontFamily: book, marginVertical: hp(1), fontWeight: 'bold' }}>
                            Email
                        </Text>
                        <Text style={{ fontSize: hp(2.5), fontFamily: book, marginVertical: hp(1), fontWeight: 'bold' }}>
                            Phone
                        </Text>
                        <Text style={{ fontSize: hp(2.5), fontFamily: book, marginVertical: hp(1), fontWeight: 'bold' }}>
                            Balance
                        </Text>
                        <Text style={{ fontSize: hp(2.5), fontFamily: book, marginVertical: hp(1), fontWeight: 'bold' }}>
                            Milage
                        </Text>
                    </View>
                    <View>
                        <Text style={{ fontSize: hp(2.5), fontFamily: book,  fontWeight: 'bold'  }}>
                            Ali Hassan
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp(60), marginVertical: hp(1) }}>
                            <Text style={{ fontSize: hp(2.5), fontFamily: book, fontWeight: 'bold' }}>
                                example@gmail.com
                            </Text>
                            <Fontisto name='email' size={hp(3)} color='#F3A419'  />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp(60), marginVertical: hp(1) }}>
                            <Text style={{ fontSize: hp(2.5), fontFamily: book, fontWeight: 'bold'  }}>
                                03331407371
                            </Text>
                            <Feather name='phone' size={hp(3)} color='#F3A419' />
                        </View>
                        <Text style={{ fontSize: hp(2.5), fontFamily: book, marginVertical: hp(1), fontWeight: 'bold' }}>
                            2000
                        </Text>
                        <Text style={{ fontSize: hp(3), fontFamily: book, marginVertical: hp(1), fontWeight: 'bold' }}>
                            90
                        </Text>
                    </View>
                </View>
                
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('payment')} style={styles.navigationButton}>
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
        alignItems: 'center', 
        backgroundColor: '#F0F0F0',
        flex: 1 
    },
    subContainerImg: { 
        marginTop: hp(4) 
    },
    text: {
        fontSize: hp(2.65), 
        fontFamily: medium, 
        fontWeight: 'bold' 
    },
    subSubContainer: { 
        marginTop: hp(2), 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: wp('85%') 
    },
    pickerContainer: { 
        width: wp(35),  
        marginTop: hp(10.5), 
        marginRight: hp(-1) 
    },
    picker: { 
        borderWidth: .3, 
        borderColor: 'black', 
        overflow: 'hidden', 
        height: hp(3.8), 
        justifyContent: 'center',
        backgroundColor: 'white' 
    },
    navigationButton: {
        bottom : hp(2.5),
        position: 'absolute',
        right: wp(3),
    }
});

export default PaymentCustomerDetailScreen;