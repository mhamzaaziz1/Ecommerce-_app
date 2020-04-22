import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import ProductDetail from '../components/ProductDetail';
import ScreenHeader from '../components/ScreenHeader';

const ProductDetailScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>

            <ScreenHeader navigation={navigation} />

            <View style={styles.subContainer}>
                
                <ProductDetail />

                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navigationButtonLeft}>
                    <Image source={require('../assets/images/previewLeft.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('productSelection')} style={styles.navigationButton}>
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
    navigationButtonLeft: {
        bottom : hp(2.5),
        position: 'absolute',
        left: wp(3),
    },
    navigationButton: {
        bottom : hp(2.5),
        position: 'absolute',
        right: wp(3),
    }
});

export default ProductDetailScreen;