import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    ScrollView,
    Image
} from 'react-native';

import iconSkip from "../../../resources/assets/images/test/iconSkip.png"
import logo_alt4 from "../../../resources/assets/images/test/logo_alt4.png"
import {connect} from "react-redux";

const mapStateToProps = state => ({});
import {bindActionCreators} from "redux";
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch
    );

class Signup extends Component {

    render() {
        return (
            <ScrollView style={{
                flex: 1, alignSelf: 'stretch',
                paddingTop: 20,
                backgroundColor: '#FFFFFF'}}>
                <View style={styles.A01a}>
                    <View style={styles.mHead}>
                        <Image source={iconSkip} style={styles.iconSkip} />
                    </View>
                    <Image source={logo_alt4} style={styles.logo_alt4} />
                    <View style={styles.mFormEmptyLarge_16}>
                        <View style={styles.bg_17}>
                            <Text style={styles.placeholder_18}>メールアドレス</Text>
                        </View>
                    </View>
                    <View style={styles.mFormEmptyLarge}>
                        <View style={styles.bg_14}>
                                <Text style={styles.placeholder}>パスワード</Text>
                        </View>
                    </View>
                    <View style={styles.buttonSave}>
                        <View style={styles.bg} />
                    </View>
                    <Text style={styles._19}>パスワードをお忘れですか？</Text>
                    <View style={styles.button}>
                        <View style={styles.frame}>
                            <Text style={styles.Facebook}>
                                <Text>Facebook</Text>{'\n'}
                                <Text>でサインイン</Text>{'\n'}
                            </Text>
                        </View>
                    </View>
                    <Text style={styles._20}>新規アカウントを作成しますか？</Text>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    A01a: {
        width: 335
    },
    mHead: {
        alignSelf: 'flex-end',
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconSkip: {

    },
    logo_alt4: {
        alignSelf: 'center',
        marginTop: 27
    },
    mFormEmptyLarge_16: {
        alignSelf: 'center',
        marginTop: 44,
        width: 325,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg_17: {
        height: 54,
        backgroundColor: '#8092A0',
        borderRadius: 4,
        width: 325,
        alignItems: 'flex-start',
        marginLeft: 20,
        justifyContent: 'center'
    },
    placeholder_18: {
        backgroundColor: 'transparent',
        fontSize: 18,
        fontWeight: '300',
        color: '#FFFFFF',
        textAlign: 'left',
        marginLeft: 20
    },
    mFormEmptyLarge: {
        alignSelf: 'center',
        marginTop: 15,
        width: 325,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg_14: {
        height: 54,
        backgroundColor: '#8092A0',
        borderRadius: 4,
        width: 325,
        alignItems: 'flex-start',
        marginLeft: 20,
        justifyContent: 'center'
    },
    placeholder: {
        backgroundColor: 'transparent',
        fontSize: 18,
        fontWeight: '300',
        color: '#FFFFFF',
        textAlign: 'left',
        marginLeft: 20
    },
    buttonSave: {
        alignSelf: 'center',
        marginTop: 15,
        width: 335,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bg: {
        backgroundColor: '#5AFFD1',
        width: 335
    },
    _19: {
        backgroundColor: 'transparent',
        fontSize: 14,
        fontWeight: '300',
        color: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 28,
        textAlign: 'center'
    },
    button: {
        alignSelf: 'center',
        marginTop: 54,
        width: 199,
        height: 39,
        alignItems: 'center',
        justifyContent: 'center'
    },
    frame: {
        height: 39,
        borderRadius: 20,
        width: 199,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Facebook: {
        backgroundColor: 'transparent',
        fontSize: 12,
        fontWeight: '400',
        color: '#FFFFFF',
        textAlign: 'center'
    },
    _20: {
        backgroundColor: 'transparent',
        fontSize: 14,
        fontWeight: '300',
        color: '#FFFFFF',
        alignSelf: 'center',
        marginTop: 21,
        textAlign: 'center'
    }
});

export const SignupScreen = connect(mapStateToProps, mapDispatchToProps)(
    Signup
);
