import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import InputPicker from '../components/InputPicker';

let width =  Dimensions.get('window').width;

const medium = 'AirbnbCerealMedium';

const ProductDetail = () => {
    return (
        <>
            <Image source={require('../assets/images/Product_Detail.png')} style={styles.subContainerImg} />
            <View style={styles.subSubContainer}>
                <View>
                    <Text style={styles.text}>
                        Warehouse
                    </Text>
                    <Text style={styles.text}>
                        Category
                    </Text>
                    <Text style={styles.text}>
                        Tax
                    </Text>
                    <Text style={styles.text}>
                        Discount
                    </Text>
                    <Text style={styles.text}>
                        Invoice Note
                    </Text>
                </View>
                <View style={{ flexDirection: 'column'}}>
                    <InputPicker pickerContainer={styles.pickerContainer} pickerStyle={styles.picker} />

                    <InputPicker pickerContainer={styles.pickerContainer} pickerStyle={styles.picker} />

                    <InputPicker pickerContainer={styles.pickerContainer} pickerStyle={styles.picker} />

                    <InputPicker pickerContainer={styles.pickerContainer} pickerStyle={styles.picker} />
                </View>
            </View>

            <View  style={styles.viewWidth}/>

            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.button}>
                    Add Product
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
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
        width: wp(42), 
        marginTop: hp(.6), 
        marginRight: hp(-1.5) 
    },
    picker: { 
        borderWidth: .3, 
        borderColor: 'black', 
        overflow: 'hidden', 
        height: hp(3.8), 
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    viewWidth: { 
        borderWidth: .5, 
        width: wp('90%'), 
        marginTop: width > 500 ? hp(2) : hp(1) 
    },
    buttonContainer: { 
        borderColor: '#707070', 
        borderWidth: 1, 
        marginTop: width > 500 ? hp(2) : hp(3), 
        backgroundColor: '#F3A419', 
        width: wp('90%'), 
        borderRadius: hp(10) 
    },
    button: { 
        padding: hp(2), 
        textAlign: 'center', 
        fontSize: hp(3.5), 
        fontWeight: 'bold', 
        fontFamily: medium 
    },
});

export default ProductDetail;