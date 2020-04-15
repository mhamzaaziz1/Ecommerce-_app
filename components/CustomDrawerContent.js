import React, { useState } from 'react';
import { View, Text, Image, StatusBar, StyleSheet } from 'react-native';
import { Container, Content, Header, Body } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const medium = 'AirbnbCerealMedium';

const CustomDrawerContent = (props) => {
    const [active1, sectActive1] = useState(false);
    const [active2, sectActive2] = useState(false);
    const [active3, sectActive3] = useState(false);

    console.log(wp('25%'));

    return (
        <DrawerContentScrollView>
            <Container>
                <Header style={styles.header}>
                    <StatusBar backgroundColor='white' barStyle='dark-content' />
                    <Body style={styles.body}>
                        <View style={styles.imgContainer}>
                            <Image source={require('../assets/images/person_image.jpg')} style={styles.img} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>
                                SaleForce
                            </Text>
                            <Text style={styles.text}>
                                +923331407371
                            </Text>
                            <Text style={styles.text}>
                                SaleForce@gmail.com
                            </Text>
                        </View>
                    </Body>
                </Header>
                <Content>
                        <DrawerItemList {...props} />
                </Content>
                <DrawerItem
                    label="Log out"
                    onPress={() => {console.log('logout')}}
                    focused={active3}
                    activeTintColor='black'
                />
            </Container>
        </DrawerContentScrollView>
        
    );
};

const styles = StyleSheet.create({
    header: { 
        height: hp('20%'), 
        backgroundColor: 'white' 
    },
    body: { 
        flexDirection: 'row', 
        justifyContent: 'space-between' 
    },
    imgContainer: { 
        marginLeft: -4,
        width: 90,
        height: 87,
        borderRadius: 50, 
        overflow: 'hidden'  
    },
    img: { 
        width: null, 
        flex: 1, 
        height: null 
    },
    textContainer: { 
        // height: hp('11.5%'), 
        height: 82.5,
        justifyContent: 'space-evenly',
        width: 170 
    },
    text: { 
        fontSize: 16, 
        fontFamily: medium 
    }
});

export default CustomDrawerContent;