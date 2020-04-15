import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, KeyboardAvoidingView, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {
        if (email == '' || password == '') {
            Alert.alert('Fields are empty');
        } else {
            navigation.navigate('drawer');
        };
    };

    return (
        <KeyboardAvoidingView behavior='position' style={styles.container}>
            <StatusBar backgroundColor='#F9AC19' barStyle='dark-content' />
            <View style={styles.imgContainer}>
                <Image source={require('../assets/images/logo_gujjar_oil.png')} />
            </View>
            <View style={styles.secondContainer}>
                <TextInput
                    autoCorrect={false}
                    placeholder='Username'
                    placeholderTextColor='#43425D'
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
                <TextInput 
                    autoCorrect={false}
                    placeholder='Password'
                    placeholderTextColor='#43425D'
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={{ ...styles.input, marginTop: hp(5) }}
                />
                <TouchableOpacity onPress={onSubmit} activeOpacity={0.5} style={styles.buttonContainer}>
                    <Text style={styles.button}>
                        Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F9AC19'
    },
    imgContainer: { 
        width: wp('70%'), 
        marginTop: hp('11%') 
    },
    secondContainer: { 
        marginTop: hp('16%'), 
        width: wp('70%') 
    },
    input: {
        borderBottomWidth: 2, 
        borderColor: '#E9E9F0', 
        fontSize: hp(2.5),
        fontFamily: book 
    },
    buttonContainer: {
        backgroundColor: '#BF9700',
        borderColor: '#707070',
        borderWidth: 1,
        borderRadius: hp(1),
        marginTop: hp(3),
        alignSelf: 'flex-end'
    },
    button: {
        padding: 10,
        color: '#3C3C3C',
        paddingHorizontal: wp(6),
        fontSize: hp(2.5),
        fontFamily: medium
    }
});

export default LoginScreen;