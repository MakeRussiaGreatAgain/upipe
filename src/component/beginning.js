import React, { Component } from 'react';

import {
    View,
    Text,
    StatusBar,
} from 'react-native';

import Header from './header';
import AlbumArt from './albumart';
import TrackDetails from './trackdetails';
import SeekBar from './seekbar';
import Controls from './controls';
import Additional from './ratio';

const onLoaded = () => (
            <View>
                <Additional />
                <Header message = "Now Playing" />
                <AlbumArt />
                <TrackDetails title = 'Song' artist = 'Artist' />
                <SeekBar trackLength = {120} currentPosition = {11} />
                <Controls />
                <Additional />
            </View>
);

export default onLoaded;