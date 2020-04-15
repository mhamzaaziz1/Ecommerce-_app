import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import InputPicker from '../components/InputPicker';
import InputText from '../components/InputText';
import ScreenHeader from '../components/ScreenHeader';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const CustomerDetailScreen = ({ navigation }) => {

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

                <TouchableOpacity onPress={() => navigation.navigate('productDetail')} style={styles.navigationButton}>
                    <Image source={require('../assets/images/preview.png')} />
                </TouchableOpacity>
            </View>
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

export default CustomerDetailScreen;