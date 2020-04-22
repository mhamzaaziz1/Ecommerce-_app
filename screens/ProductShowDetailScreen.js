import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, CardItem, Body } from 'native-base';

import ProductDetail from '../components/ProductDetail';
import ScreenHeader from '../components/ScreenHeader';
import { ScrollView } from 'react-native-gesture-handler';

let width =  Dimensions.get('window').width;

const book = 'AirbnbCerealBook';

const ProductShowDetailScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <ScreenHeader navigation={navigation} />

                <View style={styles.subContainer}>
                    
                    <ProductDetail />

                    <View style={styles.viewCard}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <View style={styles.flexDirection}>
                                        <View style={styles.imgContainer}>
                                            <Image source={require('../assets/images/person_image.jpg')} style={styles.img} />
                                        </View>
                                        <View style={styles.producContainer}>
                                            <Text style={styles.text}>
                                                Product 1
                                            </Text>
                                            <View style={styles.flexDirection}>
                                                <Text style={styles.text}>
                                                    Qty
                                                </Text>
                                                <Text style={{...styles.text, marginLeft: wp(2)}}>
                                                    2
                                                </Text>
                                            </View>
                                            <View style={styles.flexDirection}>
                                                <Text style={styles.text}>
                                                    Price
                                                </Text>
                                                <Text style={{...styles.text, marginLeft: wp(2)}}>
                                                    9000 pkr
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                </View>
            </ScrollView>
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
    viewCard: { 
        width: wp(100), 
        marginTop: hp(2.5) 
    },
    imgContainer: { 
        marginLeft: wp(-1), 
        width: width > 500 ? 110 : wp('24%'),
        height: width > 500 ? 110 : hp('11.5%'), 
        borderRadius: hp(10), 
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#736A3D'  
    },
    img: { 
        width: null, 
        flex: 1, 
        height: null 
    },
    producContainer: { 
        marginLeft: wp(4), 
        justifyContent: 'space-between',  
        height: hp('11%'), 
        marginTop: hp(.1) 
    },
    text: {
        fontSize: hp(2.5), 
        fontFamily: book,
    },
    flexDirection: { 
        flexDirection: 'row' 
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

export default ProductShowDetailScreen;