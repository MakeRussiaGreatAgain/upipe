import React, {Component} from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from 'react-native'


export default class App extends Component{

  constructor(props) {
    super(props)
    this.state = { 
      Text: "SOUNDHOUND",
      cnt: 0
    }
  }

  onPress = () => {
    this.setState({
      cnt: this.state.cnt+1,
    });
    if(this.state.cnt == 5 ){
      this.setState({
        Text: "LAUNCHING\nNOVEMBER 11",
        cnt: this.state.cnt+1,
      });
    }
    else if(this.state.cnt == 15){
      this.setState({
        Text: "BE PATIENT PEEPS\n(^_^)",
      });
    }
  }

  render() {
    return (
      <View style={styles.ultimate}>
        <Image
          style={{width: 65, height: 65, justifyContent: 'center', alignItems: 'center', padding: 5}}
          source={{uri: 'https://www.iconsdb.com/icons/preview/red/spotify-xxl.png'}}
        />
        <Text>
          ~{"\n\n\n\n\n"}
        </Text>
        <View style={styles.btncontainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onPress}
          >
            <Text style={styles.welcome}>{this.state.Text}</Text>
          </TouchableOpacity>
        </View>
      </View>  
    );
  }

}

const styles = StyleSheet.create({
  ultimate: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  btncontainer: {
    alignItems: 'center',
    borderRadius: 40,
    borderWidth: 2.0,
    borderColor: '#FE0000',
    backgroundColor: '#FE0000',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: "center",
    color: '#000000',
    margin: 5,
  },
  button: {
    alignItems: 'center',
    padding: 5,
  },
});
