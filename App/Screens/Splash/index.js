import React, {Component} from 'react';
import * as theme from "../../../theme"
import {Dimensions, StyleSheet, View, Image} from "react-native";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, StyleProvider, Item, Input, Label, Form, Text, List, ListItem } from 'native-base';
import getTheme from '../../../theme/native-base/components';
import material from '../../../theme/native-base/variables/platform';

const styles = StyleSheet.create({
    logoContainer: {
        backgroundColor: theme.colors.white,
        flex: 1,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    splash: {
        flex: 1,
        width: null,
        height: null
    },
});

export default class index extends Component {

    props: {
    };

    state: {
    };

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
    }

    validation() {
    }

    render() {
        return (
            <StyleProvider style={getTheme(material)}>
                <Container style={styles.logoContainer}>
                    <Image
                        style={styles.splash}
                        source={require('../../../resources/assets/images/splash/background.png')}
                    />
                </Container>
            </StyleProvider>
        );
    }
}
