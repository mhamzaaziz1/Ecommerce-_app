import React from 'react';
import { Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header, Left } from 'native-base';

const ScreenHeader = ({ navigation }) => {
    return (
        <Header style={styles.header}>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <Left style={styles.imgContainer}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
                    <Image source={require('../assets/images/icn_menu_dark.png')} />
                </TouchableOpacity>
            </Left>
        </Header>
    );
};

const styles = StyleSheet.create({
    header: {  
        backgroundColor: 'white', 
        height: hp(12) 
    },
    imgContainer: { 
        marginLeft: wp(-25)
    },
});

export default ScreenHeader;