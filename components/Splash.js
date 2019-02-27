import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,  AppRegistry, Image} from 'react-native';

export default class splash extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, justifyContent:"center"}}>
          <Image
          source={require('../images/i/images.jpg')}/>
        </View>
        <View>
          <Text style={styles.title2}>
            .....
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    color:'white',
    fontSize: 35,
  },
  title2: {
    color:'white',
    fontSize: 18,
    fontWeight: '100',
    paddingBottom:20
  },
});
