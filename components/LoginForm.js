import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View,  TextInput, Image, TouchableOpacity} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';

export default class LoginForm extends Component{
  resetNavigation(){
    const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
  });
  this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          placeholder="Username"
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType="next"
          onSubmitEditing={()=> this.passwordInput.focus()}
        />
        <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          placeholder="Password"
          secureTextEntry
          placeholderTextColor='rgba(255,255,255,0.7)'
          returnKeyType="go"
          ref = {(input)=>this.passwordInput=input}
        />

        <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.resetNavigation()}>
          <Text style={styles.button}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding:30,
    marginTop:180,
  },
  input: {
    height: 40,
    width:300,
    backgroundColor: 'rgba(0,0,0,0.4)',
    marginBottom: 20,
    color:'white',
    fontSize:18,
    paddingHorizontal:10
  },
  buttonContainer:{
    backgroundColor:'brown',
    paddingVertical:15
  },
  button: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight:'700'
  }
});
