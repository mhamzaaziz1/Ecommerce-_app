import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const InputText = () => {
    return (
        <View style={styles.container}>
            <View>
                <TextInput 
                    autoCorrect={false} 
                    style={styles.input}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity activeOpacity={0.6} style={styles.button1Container}>
                    <Text style={styles.button1}>
                        Search
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.6} style={styles.button2Container}>
                    <Text style={styles.button2}>
                        Add
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        marginTop: hp(4) 
    },
    input: { 
        borderWidth: 1.1, 
        width: wp('85%'), 
        fontFamily: book, 
        borderRadius: hp(2.3), 
        paddingLeft: 8, 
        fontSize: hp(2.5) 
    },
    buttonContainer: { 
        flexDirection: 'row', 
        marginTop: hp(1.5), 
        width: wp('85%'), 
        justifyContent: 'space-between' 
    },
    button1Container: {
        backgroundColor: '#707070',  
        borderWidth: 1.2, 
        borderColor: '#707070', 
        borderRadius: hp(10) 
    },
    button1: { 
        fontSize: hp(4), 
        padding: hp(1), 
        color: 'white', 
        paddingHorizontal: hp(4.5), 
        fontFamily: medium 
    },
    button2Container: { 
        backgroundColor: '#F3A419', 
        borderWidth: 1.2, 
        borderColor: '#707070', 
        borderRadius: hp(10) 
    },
    button2: { 
        fontSize: hp(4),
        padding: hp(1), 
        color: 'white', 
        paddingHorizontal: hp(5.5), 
        fontFamily: medium 
    }
});

export default InputText;