import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CustomerDetailScreen from '../screens/CustomerDetailScreen';
import ProductSelectionScreen from '../screens/ProductSelectionScreen';
import InvoiceScreen from '../screens/InvoiceScreen';
import POSScreen from '../screens/POSScreen';
import SaleScreen from '../screens/SaleScreen';
import OrderPlacementScreen from '../screens/OrderPlacementScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import QueryContact from '../screens/QueryContact';
import AdministrationScreen from '../screens/AdministrationScreen';

import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="customerDetail" headerMode="none">
            <Stack.Screen name="customerDetail" component={CustomerDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productDetail" component={ProductDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productSelection" component={ProductSelectionScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="invoice" component={InvoiceScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
        </Stack.Navigator>
    );
};

function MyDrawer() {
    return (
        <Drawer.Navigator 
            drawerContent={props => <CustomDrawerContent {...props} />} 
            drawerType={'slide'}
            drawerContentOptions={{
                activeTintColor: 'black'
            }}
        >
            <Drawer.Screen name="Dashboard" component={MyStack} />
            <Drawer.Screen name="POS" component={POSScreen} /> 
            <Drawer.Screen name="Sales" component={SaleScreen} /> 
            <Drawer.Screen name="Order Placement" component={OrderPlacementScreen} /> 
            <Drawer.Screen name="Payments" component={PaymentScreen} /> 
            <Drawer.Screen name="Subscription" component={SubscriptionScreen} />
            <Drawer.Screen name="For Query Contact" component={QueryContact} /> 
            <Drawer.Screen name="administration" component={AdministrationScreen} />
        </Drawer.Navigator>
    );
};

const GujjarNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="splash" headerMode="none">
                <Stack.Screen name="splash" component={SplashScreen} />
                <Stack.Screen name="login" component={LoginScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
                <Stack.Screen name="drawer" component={MyDrawer} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            </Stack.Navigator>
        </NavigationContainer>
    ); 
};

export default GujjarNavigator;