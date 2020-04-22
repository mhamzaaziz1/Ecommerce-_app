import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const medium = 'AirbnbCerealMedium';

const SplashScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar backgroundColor='#F9AC19' barStyle='dark-content' />
            <View style={styles.container}>
                <View style={styles.logoImgContainer}>
                    <Image source={require('../assets/images/logo_gujjar_oil.png')} />
                </View>
                <View style={styles.imgContainer}>
                    <Image source={require('../assets/images/Tagline.png')} />
                </View>
                <View style={styles.loginContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('login')} style={styles.loginButton}>
                        <Text style={styles.login}>
                            Sign in
                        </Text>
                        <FontAwesome5 name='greater-than' size={hp(2.4)} style={styles.loginIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9AC19',
    },
    logoImgContainer: {
        marginTop: hp('10%'),
        alignSelf: 'center' 
    },
    imgContainer: { 
        marginTop: hp('42%'),
        marginBottom: hp('5%'),
        marginLeft: wp(6)
    },
    loginContainer: { 
        backgroundColor: 'white', 
        flex: 1, 
        width: wp('100%'), 
        justifyContent: 'center' 
    },
    loginButton: { 
        flexDirection: 'row', 
        alignSelf: 'flex-end', 
        marginRight: wp(12) 
    },
    login: { 
        fontFamily: medium, 
        fontSize: hp(3.5), 
        fontWeight: 'bold', 
        marginRight: wp(5) 
    },
    loginIcon: { 
        fontFamily: medium, 
        fontWeight: 'bold', 
        marginTop: hp(1.4) 
    }
});

export default SplashScreen;