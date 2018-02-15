import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    TouchableOpacity,
    Animated,
    Easing,
    Alert,
    Image,
} from 'react-native';
import {
    View,
    Text,
} from "native-base";

import * as helpers from "../../../Helpers/index"
import spinner from "../../../../resources/assets/images/eye_black.png";
import * as theme from "../../../../theme/index";

const MARGIN = 40;

class SubmitButton extends Component {
    constructor() {
        super();

        this.state = {
            isLoading: false,
        };

        this.buttonAnimated = new Animated.Value(0);
        this.growAnimated = new Animated.Value(0);
        this._onPress = this._onPress.bind(this);
    }

    _onPress() {
    }

    _onGrow() {
        Animated.timing(
            this.growAnimated,
            {
                toValue: 1,
                duration: 200,
                easing: Easing.linear
            }
        ).start();
    }

    render() {
        const changeWidth = this.buttonAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [helpers.DeviceHelper.getWindowWidth() - MARGIN, MARGIN]
        });
        const changeScale = this.growAnimated.interpolate({
            inputRange: [0, 1],
            outputRange: [1, MARGIN]
        });

        return (
            <View style={styles.container}>
                <Animated.View style={{width: changeWidth}}>
                    <TouchableOpacity style={styles.button}
                                      onPress={this._onPress}
                                      activeOpacity={1} >
                        {this.state.isLoading ?
                            <Image source={spinner} style={styles.image} />
                            :
                            <Text style={styles.text}>LOGIN</Text>
                        }
                    </TouchableOpacity>
                    <Animated.View style={[ styles.circle, {transform: [{scale: changeScale}]} ]} />
                </Animated.View>
            </View>
        );
    }
}

export default SubmitButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.app.primaryColor,
        height: MARGIN,
        borderRadius: 5,
        zIndex: 100,
        padding: 20,
    },
    circle: {
        height: MARGIN,
        width: MARGIN,
        marginTop: -MARGIN,
        borderWidth: 1,
        borderColor: theme.app.primaryColor,
        borderRadius: 5,
        alignSelf: 'center',
        zIndex: 99,
        backgroundColor: theme.app.primaryColor,
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
    image: {
        width: 24,
        height: 24,
    },
});
