import React, { Component } from 'react';
import { Image, StyleSheet, View } from "react-native";
import { createStackNavigator, createAppContainer, createBottomTabNavigator,TabScene } from 'react-navigation';
import LinearGradient from "react-native-linear-gradient";
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactsScreen from './screens/ContactsScreen/ContactsScreen';
import PaymentsScreen from './screens/PaymentsScreen/PaymentsScreen';
import CodePushScreen from './screens/CodePushScreen/CodePushScreen';
import NavigationTabBar from "./components/NavigationTabBar";
import type { ImageRef } from "./data/image-ref";
import iconHomeActive from "../assets/images/homeActive.png";
import iconHomeDefault from "../assets/images/homeDefault.png";
import {
  lightTealColor,
  darkBlueGreyColor,
  transparent,
  tabBarShadowColor
} from "./constants/colors";
import Text from "./constants/text";
//import codePush from "react-native-code-push";

const tabIcon = (defaultIcon: ImageRef, activeIcon: ImageRef) => ({
  focused
}: TabScene) => (
  <Image source={focused ? activeIcon : defaultIcon} width={28} height={28} />
);

const withShadow = Component => props => (
     <View style={styles.shadowContainer}>
       <Component {...props} />
       <LinearGradient
         colors={[transparent, tabBarShadowColor]}
         style={styles.shadow}
         pointerEvents="none"
       />
     </View>
 );

const ContactStack = createStackNavigator(
    {
        ContactsNavigation: withShadow(ContactsScreen)
    },
    {
        initialRouteName: 'ContactsNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold'
            },
        },
    }
);

const PaymentStack = createStackNavigator(
    {
        PaymentNavigation: withShadow(PaymentsScreen)
     },
    {
        initialRouteName: 'PaymentNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        },
    }
);

const CodePushStack = createStackNavigator(
    {
        CodePushNavigation: withShadow(CodePushScreen)
    },
    {
        initialRouteName: 'CodePushNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        },
    }
);

const OtherStack = createStackNavigator(
    {
        OtherNavigation: withShadow(CodePushScreen)
    },
    {
        initialRouteName: 'CodePushNavigation',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#00402e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            },
        },
    }
);


const TabNav = createBottomTabNavigator(
  { 
      
    ContactsNavigation: {
      screen: ContactStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: Text.footerContacts
      }
    },
    PaymentNavigation: {
      screen: PaymentStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: Text.footerPayments
      }
    },
     CodePushNavigation: {
      screen: CodePushStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: Text.footerCodePush
      }
    },
    OtherNavigation: {
      screen: CodePushStack,
      navigationOptions:  {
        tabBarIcon: tabIcon(iconHomeDefault, iconHomeActive),
        tabBarLabel: Text.footerOthers
      }
    },
  },
  {
    tabBarComponent: NavigationTabBar,
    tabBarPosition: "bottom",
    cardStyle: {
      backgroundColor: "#00402e",
      fontWeight: 'bold'
    }
  }
);

const AppNavigation = createAppContainer(TabNav);

export default class Navigation extends Component {
    render() {
        return <AppNavigation/>;
    }
}

{/*App = codePush({ updateDialog: true, installMode: codePush.InstallMode.IMMEDIATE })(App);*/ }



const styles = StyleSheet.create({
  shadowContainer: {
    flex: 1
  },
  shadow: {
    width: "100%",
    height: 7,
    position: "absolute",
    left: 0,
    bottom: 0
  },
  card: {
    shadowOpacity: 0
  }
});