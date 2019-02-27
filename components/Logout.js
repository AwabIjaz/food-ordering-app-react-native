import React, { Component } from 'react';
import {ActivityIndicator, Platform, StyleSheet, Text, View,  AppRegistry, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Icon,Button,Body,Title,Right,Container,Header,Content,Left} from 'native-base';
import { StackActions, NavigationActions } from 'react-navigation';



class Logout extends Component{
  constructor(props){
    super(props);
    const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LoginScreen' })],
    });
    this.props.navigation.dispatch(resetAction);
  }


  render(){
    return(
    <View>
    </View>
    );
  }
}

export default Logout;
