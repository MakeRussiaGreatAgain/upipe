/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  PixelRatio,
  Dimensions,
  Platform,
  Image,
} from 'react-native';
import YouTube, { YouTubeStandaloneIOS, YouTubeStandaloneAndroid } from 'react-native-youtube';

import { Slider } from 'react-native-elements'

export default class App extends Component{
  state = {
    PlaylistId: "PLTx4BB44hT9Pio9xBHU6dJ5JnuHt56-4S",
    isReady: false,
    status: null,
    quality: null,
    error: null,
    isPlaying: true,
    isLooping: true,
    duration: 0,
    currentTime: 0,
    fullscreen: false,
    containerMounted: false,
    containerWidth: 0,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}>
        <View style = {styles.headcontainer}>
          <Text style = {styles.message}>{"Lennon"}</Text>
        </View>
        {this.state.containerMounted && (
          <YouTube
            ref={component => {
              this._youTubeRef = component;
            }}
            // apiKey only necessary for Android
            apiKey="                  API         KEY         HERE                                             "
            //videoId="ncw4ISEU5ik"
            // videoIds={['HcXNPI-IPPM', 'XXlZfc1TrD0', 'czcjU1w-c6k', 'uMK0prafzw0']}
            playlistId={this.state.PlaylistId}
            play={this.state.isPlaying}
            loop={this.state.isLooping}
            fullscreen={this.state.fullscreen}
            controls={1}
            style={[
              { height: 0 },
              styles.player,
            ]}
            onError={e => this.setState({ error: e.error })}
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onChangeFullscreen={e => this.setState({ fullscreen: e.isFullscreen })}
            onProgress={e => this.setState({ duration: e.duration, currentTime: e.currentTime })}
          />
        )}
        <View style = {styles.albumartcontainer}>
          <TouchableOpacity>
            <Image 
              style = {styles.imagecontainer}
              source = {require('./images/defaultAlbumArt.gif')}
            />
          </TouchableOpacity>
        </View>
        <View style = {styles.headcontainer}>
          <View style = {styles.detailsWrapper}>
            <Text style = {styles.title}>{"Lennon"}</Text>
            <Text style = {styles.artist}>{this.state.status == 'playing' ? 'Piping your stream' : 'Collecting your stream'}</Text>
          </View>
        </View>
        <View style = {styles.timercontainer} >
          <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>
              {Math.trunc(this.state.currentTime / 60)}:{Math.trunc(
              this.state.currentTime % 60,
              )}
              </Text>
              <View style={{flex: 1}} />
              <Text style={[styles.text, {width: 40}]}>
              {Math.trunc(this.state.duration / 60)}:{Math.trunc(
              this.state.duration % 60,
              )}
              </Text>
          </View>
        </View>
        <View style={styles.slidercontainer}>
        <Slider
            maximumValue={Math.max(this.state.duration, 1, this.state.currentTime + 1)}
            onSlidingComplete={() => this._youTubeRef && this._youTubeRef.nextVideo()}
            onValueChange={(value) => {this.setState({currentTime: value}); this._youTubeRef && this._youTubeRef.seekTo(value)}}
            value={this.state.currentTime}
            style={styles.slider}
            minimumTrackTintColor='#fff'
            maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
            thumbStyle={styles.thumb}
            trackStyle={styles.track}/>
        </View>

        {/* Playing / Looping */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._youTubeRef && this._youTubeRef.previousVideo()}
          >
            <Image style={ styles.off}
            source={require('./images/ic_shuffle_white.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._youTubeRef && this._youTubeRef.previousVideo()}
          >
            <Image style={ styles.off}
            source={require('./images/ic_skip_previous_white_36pt.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState(s => ({ isPlaying: !s.isPlaying }))}
          >
            <View style={styles.playButton}>
              <Image source={this.state.status == 'playing' ?require('./images/ic_pause_white_48pt.png') : require('./images/ic_play_arrow_white_48pt.png')}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this._youTubeRef && this._youTubeRef.nextVideo()}
          >
           <Image style={ styles.off}
            source={require('./images/ic_skip_next_white_36pt.png')}/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.setState(s => ({ isLooping: !s.isLooping }))}
          >
            <Image style={this.state.isLooping ? [] : styles.off}
            source={require('./images/ic_repeat_white.png')}/>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const { width, height } = Dimensions.get('window');
const imgSize = width - 48;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  },
  buttonGroup: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'blue',
  },
  buttonTextSmall: {
    fontSize: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  player: {
    alignSelf: 'stretch',
    marginVertical: 10,
  },
  message: {
    flex: 1,
    paddingTop: 4,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  headcontainer: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000000',
  },
  albumartcontainer: {
    paddingLeft: 24,
    paddingRight: 24,
    backgroundColor: '#000000',
  },
  imagecontainer: {
    width: imgSize,
    height: imgSize,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  slider: {
    marginTop: -12,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  slidercontainer: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    backgroundColor: '#000000',
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  off: {
    opacity: 0.30,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    textAlign:'center',
  },
  timercontainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    backgroundColor: '#000000',
},
});