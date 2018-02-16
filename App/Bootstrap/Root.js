import React from 'react';
import {
    StackNavigator,
    TabNavigator,
    TabBarBottom,
    NavigationActions,
} from 'react-navigation';
import * as config from "../../config/index";
import SplashScreen from "../Screens/Splash";
import { HomeScreen } from "../Screens/Home/Screen";
import { SigninScreen } from "../Screens/Signin/Screen";
import { SignupScreen } from "../Screens/Signup/Screen";

import TestScreen from "../Screens/Test";

export const Root = StackNavigator(
    {
        Splash: {
            screen: SplashScreen,
            navigationOptions: {
                header: null,
            },
        },
        Signup: {
            screen: SignupScreen,
            navigationOptions: {
                header: null,
            },
        },
        Signin: {
            screen: SigninScreen,
            navigationOptions: {
                header: null,
            },
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        Test: {
            screen: TestScreen,
            navigationOptions: {
                header: null,
            },
        },

    },
    {
        headerMode: "screen",
        URIPrefix: config.app.URIPrefix,
        cardStyle: {
            backgroundColor: 'transparent',
        },
        initialRouteName: "Signup",
    }
);
