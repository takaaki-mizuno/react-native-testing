import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, View} from "react-native";
import {bindActionCreators} from 'redux';
import {Style} from "./Style"
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right,
    List,
    ListItem
} from "native-base";

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {},
        dispatch
    );

class Home extends Component {
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
            <Container style={Style.Container}>
            </Container>
        );
    }
}

export const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(
    Home
);
