import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, View, ScrollView} from "react-native";
import {bindActionCreators} from 'redux';
import {
    Container,
} from "native-base";
import {Logo, Form, SignupSection, SubmitButton} from "./Components";

import {Style} from "./Style";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch
    );

class Signin extends Component {
    props: {};

    state: {};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
    }

    render() {
        const {} = this.props;
        const {} = this.state;

        return (
            <ScrollView style={Style.Container}>
                <Logo/>
                <Form/>
                <SignupSection/>
                <SubmitButton/>
            </ScrollView>
        );
    }
}

export const SigninScreen = connect(mapStateToProps, mapDispatchToProps)(
    Signin
);
