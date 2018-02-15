import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    Image,
} from 'react-native';
import {
    View,
    Input,
} from "native-base";
import * as helpers from "../Helpers";
import * as theme from "../../theme";

class TextField extends Component {
    render() {
        return (
            <View style={styles.inputWrapper}>
                <Image source={this.props.source}
                       style={styles.inlineImage} />
                <Input style={styles.input}
                           placeholder={this.props.placeholder}
                           secureTextEntry={this.props.secureTextEntry}
                           autoCorrect={this.props.autoCorrect}
                           autoCapitalize={this.props.autoCapitalize}
                           returnKeyType={this.props.returnKeyType}
                           placeholderTextColor={theme.app.inputPlaceholderTextColor}
                           underlineColorAndroid='transparent' />
            </View>
        );
    }
}

TextField.propTypes = {
    source: PropTypes.number.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
    autoCorrect: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    returnKeyType: PropTypes.string,
};

export default TextField;

const styles = StyleSheet.create({
    input: {
        backgroundColor: theme.app.inputBackgroundColor,
        width: helpers.DeviceHelper.getWindowWidth() - 40,
        height: 15,
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 50,
        borderRadius: 5,
        color: theme.app.inputTextColor,
    },
    inputWrapper: {
    },
    inlineImage: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 20,
        top: 24
    },
});
