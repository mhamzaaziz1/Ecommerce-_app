import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { BarChart,Grid, XAxis, YAxis  } from 'react-native-svg-charts';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import ScreenHeader from '../components/ScreenHeader';

const book = 'AirbnbCerealBook';

const Dashboard = ({ navigation }) => {
        const fill = 'rgb(134, 65, 244)';
        const axesSvg = { fontSize: 10, fill: 'grey' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30

        const data = [
            {
                value: 70,
                label: 'Mon',
            },
            {
                value: 10,
                label: 'Tue',
            },
            {
                value: 40,
                label: 'Wed',
            },
            {
                value: 5,
                label: 'Thur',
            },
            {
                value: 45,
                label: 'Fri',
            },
            {
                value: 85,
                label: 'Sat',
            },
            {
                value: 5,
                label: 'San',
            },
        ];

        return (
            <View style={styles.container}>

             <ScreenHeader navigation={navigation} />

                <View style={{ height: 300, padding: 20, flexDirection: 'row', marginTop: hp(3) }}>
                    <YAxis
                        data={data}
                        style={{ marginBottom: 26 }}
                        contentInset={verticalContentInset}
                        svg={{ fill: 'black' }}
                        yAccessor={({ item }) => item.value} 
                    />
                    <View style={{ flex: 1, marginLeft: 10 }}>
                        <BarChart
                            style={styles.barChart}
                            data={data}
                            contentInset={verticalContentInset}
                            yAccessor={({ item }) => item.value} 
                            svg={{ stroke: 'rgb(134, 65, 244)' }}
                        >
                            <Grid/>
                        </BarChart>
                        <XAxis
                            data={data}
                            formatLabel={ (value, index) => index }
                            contentInset={{ left: 11, right: 10 }}
                            labelStyle={ { color: 'black' } }
                            svg={{ fill: 'black' }}
                            xAccessor={({ index }) => index}
                            formatLabel={(_, index) => data[ index ].label}
                            style={{ marginHorizontal: 12 }}
                        /> 
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: wp(100), position: 'absolute', bottom: 5 }}>
                    <TouchableOpacity style={{  width: 172.88, height: 134, justifyContent: 'center',
                         borderRadius: 15, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: '#707070'}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <Fontisto name='visa' size={hp(7)} color='#4392F9' style={{ width: 75, height: 54 }} />
                            <Text style={{ fontFamily: book, fontSize: hp(3.2), width: 45, height: 33 }}>
                                Sale
                            </Text>
                        </View>
                        <Text style={{ textAlign: 'center', marginTop: hp(1), fontFamily: book }}>
                            123455
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 172.88, height: 134, justifyContent: 'center', borderRadius: 15, backgroundColor: '#FFFFFF', borderColor: '#707070', borderWidth: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <FontAwesome name='bank' size={hp(7)} color='#58D46E' style={{ width: 54, height: 54 }} />
                            <Text style={{ fontFamily: book, fontSize: hp(3.2), width: 106, height: 33 }}>
                                Payments
                            </Text>
                        </View>
                        <Text style={{ textAlign: 'center', fontFamily: book }}>
                            123455
                        </Text>
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
    barChart: { 
        flex: 1,
        borderBottomWidth: 1.5, 
        borderLeftWidth: 1.5, 
        marginBottom: hp(1)
    } 
});

export default Dashboard;