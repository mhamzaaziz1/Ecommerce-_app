import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card, CardItem, Body } from 'native-base';

import AntDesign from 'react-native-vector-icons/AntDesign';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const ProductDisplay = ({ searchCardContainer }) => {
    return (
        <Card style={{...searchCardContainer, height: hp(17) }}>
            <CardItem>
                <Body>
                    <View style={{ flexDirection: 'row' }}>
                        <View>
                            <View style={styles.imgContainer}>
                                <Image source={require('../assets/images/person_image.jpg')} style={styles.img} />
                            </View>
                            <View style={styles.qtyContainer}>
                                <Text style={styles.qty}>99</Text>
                            </View>
                        </View>
                        <View style={styles.productContainer}>
                            <Text style={styles.productName}>
                                Product 1
                            </Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>
                                    Price = 295
                                </Text>
                                <Text style={styles.totalPrice}>
                                    Total: 00000
                                </Text>
                            </View>
                            <View style={styles.discountContainer}>
                                <Text style={styles.discountText}>
                                    Discount:
                                </Text>
                                <TextInput keyboardType='number-pad' autoCorrect={false} style={styles.input} />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity>
                                <AntDesign name='pluscircle' size={hp(3)} color='blue' />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <AntDesign name='minuscircle' size={hp(3)} color='red' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Body>
            </CardItem>
        </Card>
    );
};

const styles = StyleSheet.create({
    imgContainer: { 
        marginLeft: wp(-1), 
        width: wp('24%'),
        height: hp('11.5%'), 
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
    qtyContainer: { 
        backgroundColor : '#87BCBF', 
        borderWidth: 1, 
        borderColor: '#FFFFFF', 
        borderRadius: hp(10), 
        width: 23.86, 
        height: 24.5, 
        marginTop: hp(-2.6), 
        marginLeft: hp(1)
    },
    qty: { 
        textAlign: 'center', 
        marginTop: 1.3 
    },
    productContainer: { 
        marginLeft: wp(3), 
        justifyContent: 'space-between',  
        height: hp('11%'), 
        marginTop: hp(.1)  
    },
    productName: { 
        fontFamily: medium, 
        fontSize: hp(2.5) 
    },
    priceContainer: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    price: { 
        fontFamily: book, 
        fontSize: hp(2) 
    },
    totalPrice: {
        marginTop: hp(-.1), 
        fontFamily: medium 
    },
    discountContainer: { 
        flexDirection: 'row' 
    },
    discountText: { 
        fontFamily: medium, 
        fontSize: hp(2.5)
    },
    input: { 
        borderBottomWidth: 2, 
        height: hp(5), 
        width: wp(25), 
        marginLeft: hp(1), 
        marginTop: hp(-2.5), 
        paddingBottom: -.5, 
        fontFamily: book 
    },
    buttonContainer: { 
        marginLeft: wp(8), 
        justifyContent: 'space-between', 
        height: hp(8), 
        marginTop: hp(1.5) 
    }
});

export default ProductDisplay;