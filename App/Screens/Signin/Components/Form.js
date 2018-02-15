import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    Image,
} from 'react-native';

import TextField from '../../../Components/TextField';

import usernameImg from "../../../../resources/assets/images/username.png";
import passwordImg from "../../../../resources/assets/images/password.png";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true,
            press: false,
        };
        this.showPass = this.showPass.bind(this);
    }

    showPass() {
        this.state.press === false ? this.setState({ showPass: false, press: true }) :this.setState({ showPass: true, press: false });
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding'
                                  style={styles.container}>
                <TextField source={usernameImg}
                           placeholder='Username'
                           autoCapitalize={'none'}
                           returnKeyType={'done'}
                           autoCorrect={false} />
                <TextField source={passwordImg}
                           secureTextEntry={this.state.showPass}
                           placeholder='Password'
                           returnKeyType={'done'}
                           autoCapitalize={'none'}
                           autoCorrect={false} />
            </KeyboardAvoidingView>
        );
    }
}

export default Form;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        margin: 20,
    },
});
