import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CustomerDetailScreen from '../screens/CustomerDetailScreen';
import PaymentCustomerDetailScreen from '../screens/PaymentCustomerDetailScreen';
import ProductShowDetailScreen from '../screens/ProductShowDetailScreen';
import ProductSelectionScreen from '../screens/ProductSelectionScreen';
import InvoiceScreen from '../screens/InvoiceScreen';
import POSScreen from '../screens/POSScreen';
import SaleScreen from '../screens/SaleScreen';
import Dashboard from '../screens/../screens/Dashboard';
import OrderPaymentScreen from '../screens/OrderPaymentScreen';
import SalePaymentScreen from '../screens/SalePaymentScreen';
import PaymentScreen from '../screens/PaymentScreen';
import SubscriptionScreen from '../screens/SubscriptionScreen';
import QueryContact from '../screens/QueryContact';
import AdministrationScreen from '../screens/AdministrationScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';
import ManageExpenseScreen from '../screens/ManageExpenseScreen';

import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function OrderStack() {
    return (
        <Stack.Navigator initialRouteName="customerDetail" headerMode="none">
            <Stack.Screen name="customerDetail" component={CustomerDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productDetail" component={ProductDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productSelection" component={ProductSelectionScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="payment" component={OrderPaymentScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productShow" component={ProductShowDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
        </Stack.Navigator>
    );
};

function SaleStack() {
    return (
        <Stack.Navigator initialRouteName="customerDetail" headerMode="none">
            <Stack.Screen name="customerDetail" component={CustomerDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productDetail" component={ProductDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productSelection" component={ProductSelectionScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="payment" component={SalePaymentScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="productShow" component={ProductShowDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
        </Stack.Navigator>
    );
};

function PaymentStack() {
    return (
        <Stack.Navigator initialRouteName="paymentCustomerDetail" headerMode="none">
            <Stack.Screen name="paymentCustomerDetail" component={PaymentCustomerDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="payment" component={PaymentScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
        </Stack.Navigator>
    );
};

function ExpenseStack() {
    return (
        <Stack.Navigator initialRouteName="customerDetail" headerMode="none">
            <Stack.Screen name="expenseDetail" component={ExpenseDetailScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="manageExpense" component={ManageExpenseScreen} options={{ ...TransitionPresets.SlideFromRightIOS, gestureDirection: 'horizontal' }} />
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
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="POS" component={OrderStack} /> 
            <Drawer.Screen name="Sales" component={SaleStack} /> 
            <Drawer.Screen name="Order Placement" component={OrderStack} /> 
            <Drawer.Screen name="Payments" component={PaymentStack} /> 
            <Drawer.Screen name="Subscription" component={OrderStack} />
            <Drawer.Screen name="Expenses" component={ExpenseStack} />
            <Drawer.Screen name="For Query Contact" component={QueryContact} /> 
            <Drawer.Screen name="administration" component={POSScreen} />
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