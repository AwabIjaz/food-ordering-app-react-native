import React, { Component } from 'react';
import {ActivityIndicator,Alert,FlatList, Platform, StyleSheet, Text, View,  AppRegistry, Image, ScrollView, TouchableHighlight,TouchableOpacity} from 'react-native';
import DrawerNavigator from 'react-navigation';
import {Icon,Button,Body,Right,Title,Container,Header,Content,Left} from 'native-base';


export default class Order extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      dataSource:[]
    }
  }

  componentDidMount(){

    return fetch('http://127.0.0.1:8000/api/order_return', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        data: this.props.navigation.getParam('data_arr',[]),

      })

    }).then((response) => response.json())
          .then((responseJson) => {


            this._interval = setInterval(() => {
              this.Order_Response()
            }, 3000);


          })
          .catch((error) =>{
            console.error(error);
          });
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  Order_Response(){

    return fetch('http://127.0.0.1:8000/api/order_response')
      .then((response) => response.json())
      .then((responseJson) => {

        if(responseJson == "Pending"){
            this.setState({isLoading: true})
        }

        else{
          this.setState({isLoading: false})
        }

        this.setState({
          dataSource:responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });

  }


  render(){

    if(this.state.isLoading){
      return(
        <View style={s.container}>
        <Header style={{marginTop:23}}>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("MenuScreen")}
            >
            <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Your Order:</Title>
          </Body>
          <Right>
          </Right>
        </Header>
          <View style={s.textC}><Text  style={{fontSize: 25, color:'black'}}>Your Order is Pending</Text>
          <ActivityIndicator/>
          </View>
        </View>
      )
    }

else{
      return(
        <View style={s.container}>
          <Header style={{marginTop:23}}>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.navigate("HomeS")}
              >
              <Icon name="home" />
              </Button>
            </Left>
            <Body>
              <Title>Your Order:</Title>
            </Body>
            <Right>
            </Right>
          </Header>
          <View style={s.textC}>
          <Text style={{fontSize: 25, color:'black'}}>Your Order has been {this.state.dataSource}</Text>
          </View>
        </View>
      );
    }

  }

}

  const s = StyleSheet.create({
  container: {
  flex:1,
  },
  textC: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
});
