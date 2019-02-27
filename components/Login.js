import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,  AppRegistry, Image, KeyboardAvoidingView} from 'react-native';
import LoginForm from './LoginForm';

export default class login extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../images/images.jpg')} />
          <Text style={styles.title}>Dine in-time</Text>
        </View>
        <View>
          <LoginForm />
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
  logoContainer: {
    alignItems:'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width:100,
    height:100
  },
  title: {
    color:'#fff',
    marginTop: 10,
    width:160,
    textAlign:'center',
    opacity:0.9
  },
});
