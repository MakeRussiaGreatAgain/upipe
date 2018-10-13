import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
} from 'react-native';

let path = '../img/defaultAlbumArt.gif';


const AlbumArt = ({
    url,
}) => (
    <View style = {styles.container}>
        <TouchableOpacity>
            <Image 
                style = {styles.image}
                source = {require(path)}
            />
        </TouchableOpacity>
    </View>
);

export default AlbumArt;

const { width, height } = Dimensions.get('window');
const imgSize = width - 48;

const styles = StyleSheet.create({
    container: {
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#000000',
    },
    image: {
        width: imgSize,
        height: imgSize,
    },
});