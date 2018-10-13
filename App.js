import React, {Component} from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar,
} from 'react-native';

import OnLoaded from './src/component/beginning';

export default class App extends Component{
    state = {
        loaded: false,
    }
    load = (cb) => (setTimeout(cb,3000));

    constructor(){
        super();
        this.load(v => this.setState({loaded: true}));
    }

    render() {
        return (
            <View>
                <OnLoaded />
            </View>
        );
    }
}