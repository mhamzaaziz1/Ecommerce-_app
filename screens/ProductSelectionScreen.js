import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Header, Title, Card, CardItem, Body } from 'native-base';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import ProductDisplay from '../components/ProductDisplay';

const medium = 'AirbnbCerealMedium';
const book = 'AirbnbCerealBook';

const ProductSelectionScreen = ({ navigation }) => {
    return (
        <View style={{ flex:1, backgroundColor: 'white' }}>
            <ScrollView>
                <View style={styles.container}>
                    <Header style={styles.header}>
                        <StatusBar backgroundColor='white' barStyle='dark-content' />
                        <View style={styles.headerContainer}>
                            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
                                <FontAwesome5 name='less-than' size={hp(2.5)} />
                            </TouchableOpacity>
                            <View>
                                <Title style={styles.headerTitle}>Product Selection</Title>
                            </View>
                            <TouchableOpacity style={styles.headerRightIcon}>
                                <Image source={require('../assets/images/icn_scribe.png')} />
                            </TouchableOpacity>
                        </View>
                    </Header>
                    <View style={styles.viewWidth} />
                    <View style={{ flex:1 }}>
                        <Card style={styles.searchCardContainer}>
                            <CardItem>
                                <Body>
                                    <View style={styles.secondContainer}>
                                        <View style={styles.inputContainer}>
                                            <TextInput 
                                                placeholder='Search Product' 
                                                placeholderTextColor='black'
                                                autoCorrect={false}
                                                style={styles.input}
                                            />
                                            <Feather name='search' size= {hp(3)} style={styles.inputSearchBar} />
                                        </View>
                                        <Image source={require('../assets/images/qrcode.jpg')} style={{ marginRight: wp(-2)}} />
                                    </View>
                                </Body>
                            </CardItem>
                        </Card>
                        <View style={{...styles.viewWidth, marginTop: hp(-.7)}} />
                        
                        <ProductDisplay searchCardContainer={styles.productCardContainer} />

                    </View>
                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('productShow')}  style={styles.doneButtonContainer}>
                <Text style={styles.doneButton}>
                    Done
                </Text>
            </TouchableOpacity>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {  
        backgroundColor: 'white', 
        height: hp(12)
    },
    headerContainer: { 
        flexDirection:'row', 
        alignSelf: 'center', 
        justifyContent: 'space-between', 
        width: wp('100%') 
    },
    icon: { 
        marginLeft: wp(4),
        marginTop: hp(.6)
    },
    headerTitle: { 
        color: 'black', 
        fontSize: hp(3), 
        fontFamily: medium 
    },
    headerRightIcon: { 
        marginRight: wp(4), 
        marginTop: hp(.6) 
    },
    secondContainer: {  
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        alignSelf: 'center', 
        width: wp(90),
    },
    searchCardContainer: { 
        width: wp('101%'), 
        marginLeft: -1 , 
        marginTop: -.6, 
        height: hp(13), 
        justifyContent: 'center',
    },
    productCardContainer: { 
        width: wp('101%'), 
        marginLeft: -1 , 
        marginTop: -.6, 
        height: hp(13), 
        justifyContent: 'center'
    },
    inputContainer: { 
        flexDirection: 'row', 
        borderWidth: 1, 
        width: wp(77), 
        height: hp(6), 
        marginTop: hp(.6),
        borderColor: '#C8D1D3',  
        backgroundColor: '#F0F3F4'
    },
    input: { 
        paddingLeft: 8, 
        width: wp(68),
        fontFamily: book,
        fontSize: hp(2.2)
    },
    inputSearchBar: { 
        marginTop: hp(1)
    },
    viewWidth: { 
        borderWidth: .7, 
    },
    doneButtonContainer: {  
        backgroundColor: '#F3A419', 
        width: wp(25),
        borderWidth: 1.2, 
        borderColor: '#707070', 
        borderRadius: hp(10),
        bottom : 20,
        position: 'absolute',
        right: 20,
    },
    doneButton: { 
        fontFamily: medium, 
        textAlign: 'center', 
        padding: 13, 
        fontSize: hp(2.2)
    }
});

export default ProductSelectionScreen;