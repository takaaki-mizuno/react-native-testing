import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Image,
} from "react-native";
import {
    View,
    Text,
} from "native-base";

import * as config from "../../../../config";
import * as theme from "../../../../theme";
import logoImg from "../../../../resources/assets/images/logo.svg";

import { width, height, totalSize } from 'react-native-dimension';
import SVGImage from 'react-native-svg-image';

const styles = StyleSheet.create({
    container: {
        flex: 5,
        alignItems: 'center',
        marginTop: 80,
    },
    image: {
        width: 80,
        height: 80,
    },
    text: {
        color: theme.app.primaryColor,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 10,
    }
});

class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SVGImage source={{uri:"../../../../resources/assets/images/logo.svg"}} style={{ width: 80, height: 80 }} />
                <Text style={styles.text}>{ config.app.name }</Text>
            </View>
        );
    }
}

export default Logo;

