import React, {Component} from 'react';
import {
    AppRegistry,
    AsyncStorage, LayoutAnimation,
    Platform,
    StyleSheet,
    StatusBar
} from 'react-native';
import codePush from 'react-native-code-push';
import * as Helpers from "../Helpers/index"

import {Root as AppRoot} from "./Root";
import * as theme from "../../theme";
import {Root, StyleProvider} from 'native-base';

import getTheme from '../../theme/native-base/components';
import material from '../../theme/native-base/variables/platform';

class App extends Component {

    static async initLocale() {
        const locale = await Helpers.LocalizationHelper.getLocale();
    }

    constructor() {
        super();

        this.state = {};
        this.statusBarHandler = this.statusBarHandler.bind(this);
    }

    componentWillMount() {
        this.constructor.initLocale();
    }

    componentDidMount() {
        if (!__DEV__) {
            codePush.sync({
                updateDialog: false,
                installMode: codePush.InstallMode.IMMEDIATE,
            });
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    getCurrentRouteName(navigationState) {
        if (!navigationState) {
            return null;
        }
        const route = navigationState.routes[navigationState.index];

        if (route.routes) {
            return this.getCurrentRouteName(route);
        }

        return route.routeName;
    }

    statusBarHandler(prev, next) {
        const routeName = this.getCurrentRouteName(next);

        const {translucent, backgroundColor, barStyle} = theme.getStatusBarConfig(
            routeName
        );

        if (Platform.OS === 'android') {
            StatusBar.setTranslucent(translucent);
            StatusBar.setBackgroundColor(backgroundColor);
        }
        StatusBar.setBarStyle(barStyle);
    }

    onBeforeLift() {
        // take some action before the gate lifts
    }

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Root>
                    <AppRoot onNavigationStateChange={this.statusBarHandler}>
                        <StatusBar/>
                    </AppRoot>
                </Root>
            </StyleProvider>
        );
    }
}


export default () => App;
