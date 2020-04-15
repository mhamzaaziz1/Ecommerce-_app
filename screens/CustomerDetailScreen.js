import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import InputPicker from '../components/InputPicker';
import InputText from '../components/InputText';
import ScreenHeader from '../components/ScreenHeader';

const CustomerDetailScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <ScreenHeader navigation={navigation} />

            <View style={styles.subContainer}>
                
                <Image source={require('../assets/images/Customer_Detail.png')} style={styles.subContainerImg} />
                
                <View style={styles.subSubContainer}>
                    <View>
                        <Image source={require('../assets/images/Invoice.png')} />
                    </View>

                    <InputPicker pickerContainer={styles.pickerContainer} pickerStyle={styles.picker} />

                </View>

                <InputText />

            </View>
            <Button title='cjzj' onPress={() => navigation.navigate('productDetail')} />
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
        width: wp(35), 
        marginTop: hp(14.2), 
        marginRight: hp(-1) 
    },
    picker: { 
        borderWidth: .3, 
        borderColor: 'black', 
        overflow: 'hidden', 
        height: hp(3.8), 
        justifyContent: 'center',
        backgroundColor: 'white' 
    }
});

export default CustomerDetailScreen;