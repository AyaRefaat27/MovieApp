import * as React from 'react';
import * as Battery from 'expo-battery';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const image = {uri : 'https://i.pinimg.com/originals/f7/ff/70/f7ff700d7cd14db67d12fa706dbe7583.jpg'};

export default class BattaryApp extends React.Component {
  state = {
    batteryLevel: null,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <Text style={styles.txt}>Current Battery Level: {this.state.batteryLevel}</Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 15,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  txt:{
    color:'#333' , 
    fontSize:20 , 
    fontWeight:'bold' , 
    textAlign:'center',
    backgroundColor:'#fff',
    width:300,
    borderRadius:20,
    margin:30}
});
