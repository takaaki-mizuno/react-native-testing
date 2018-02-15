import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
} from 'react-native';
import {
    View,
    Text,
} from "native-base";
import * as helpers from "../../../Helpers";
import * as theme from "../../../../theme";

class SignupSection extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create Account</Text>
                <Text style={styles.text}>Forgot Password?</Text>
            </View>
        );
    }
}

export default SignupSection;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: helpers.DeviceHelper.getWindowWidth(),
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 50,
        marginBottom: 20,
    },
    text: {
        marginTop: 10,
        color: theme.app.primaryColor,
        backgroundColor: 'transparent',
    },
});
