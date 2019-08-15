import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactsScreen from './screens/ContactsScreen/ContactsScreen';
import PaymentsScreen from './screens/PaymentsScreen/PaymentsScreen';
import CodePushScreen from './screens/CodePushScreen/CodePushScreen';
//import codePush from "react-native-code-push";

const RootStack = createStackNavigator(
    {
        HomeNavigation: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        ContactsNavigation: ContactsScreen,
        PaymentNavigation: PaymentsScreen,
        CodePushNavigation: CodePushScreen
    },
    {
        initialRouteName: 'HomeNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const AppContainer = createAppContainer(RootStack);

export default class Navigation extends Component {
    render() {
        return <AppContainer />;
    }
}

{/*App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);*/ }

