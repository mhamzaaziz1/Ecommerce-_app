import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import InputPicker from '../components/InputPicker';
import InputText from '../components/InputText';
import ScreenHeader from '../components/ScreenHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const ProductDetailScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <ScreenHeader navigation={navigation} />

            <View style={styles.subContainer}>
                <Image source={require('../assets/images/Product_Detail.png')} style={styles.subContainerImg} />
                <View style={styles.subSubContainer}>
                    <View>
                        <Image source={require('../assets/images/warehouse.png')} />
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

            </View>
            <Button title='cjzj' onPress={() => navigation.navigate('productSelection')} />
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
        backgroundColor: '#D9D9D9',
        flex: 1 
    },
    subContainerImg: { 
        marginTop: hp(4) 
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
        marginTop: hp(.5) 
    },
    buttonContainer: { 
        borderColor: '#707070', 
        borderWidth: 1, 
        marginTop: hp(3), 
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
    }
});

export default ProductDetailScreen;