import React, { Component } from 'react';
import {Platform,StyleSheet,Text,View,AppRegistry,StatusBar} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import Splash from './components/Splash';
import TabNavigator from './components/Login2';
import Drawer from './components/Home';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Order from './components/Order';


const AppNavigator = createStackNavigator({
  LoginScreen: TabNavigator,
  HomeScreen: Drawer,
  MenuScreen: Menu,
  CartScreen: Cart,
  OrderScreen: Order
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode:'none'
  }
);

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      page:<Splash/>
    }
  }

  componentDidMount() {
  this._interval = setInterval(() => {
    this.load()
  }, 900);
}

componentWillUnmount() {
  clearInterval(this._interval);
}

load(){
  this.setState({page:<AppNavigator/>})
}

  render() {
    return (
      <View style={s.container}>
      <StatusBar backgroundColor='rgba(0,0,0,0.3)' translucent={true} />
        {this.state.page}
      </View>
    );
  }
}

const s = StyleSheet.create({
container:{
  flex:1,
}
});
