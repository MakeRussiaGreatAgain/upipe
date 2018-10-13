import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

const reqRatio = 1920.0/1080.0;
const { width, height } = Dimensions.get('window');
const currentRatio = height/width;

let addHeight = 0;

if(currentRatio > reqRatio){
    addHeight = (height - (width*reqRatio))/2.0
}

const Additional = () => (
    <View style = {styles.container} />
);

export default Additional;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000000',
        height: addHeight,
    },
});

