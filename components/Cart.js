import React, { Component } from 'react';
import {Alert,FlatList, Platform, StyleSheet, Text, View,  AppRegistry, Image, ScrollView, TouchableHighlight,TouchableOpacity} from 'react-native';
import DrawerNavigator from 'react-navigation';
import {Icon,Button,Body,Right,Title,Container,Header,Content,Left} from 'native-base';
import Menu from './Menu';


export default class Cart extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading: true,
      dataSource:[],
      Total:0
    }
  }

  componentDidMount(){

    return fetch('http://127.0.0.1:8000/api/theorder', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
       'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        id: this.props.navigation.getParam('itmId',[]),
        quantity: this.props.navigation.getParam('itmQuantity',[])

      })

    }).then((response) => response.json())
          .then((responseJson) => {


            this.setState({
              isLoading: false,
              dataSource: responseJson,
            }, function(){

            });

            this.cal(this.props.navigation.getParam('itmSum',[]));

          })
          .catch((error) =>{
            console.error(error);
          });
  }


  cal(sum){
    this.setState({Total:sum});
  }

  clear_cart(){
    this.setState({Total:0,dataSource:[]});
    this.props.navigation.state.params.onNavigateBack();
  }

  OrderFunction(){
    Alert.alert("Thank You for your order");
    this.props.navigation.navigate('OrderScreen',{
      data_arr:this.state.dataSource
    });
  }


  render() {
    return (
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
          <Title>Your Cart:</Title>
        </Body>
        <Right>
          <Button onPress={()=>this.clear_cart()}>
            <Title>Clear Cart</Title>
          </Button>
        </Right>
      </Header>
        <View style={s.titleC}>
          <View style={{flex:1}}><Text style={s.title}>Id</Text></View>
          <View style={{flex:1.5}}><Text style={s.title}>Name</Text></View>
          <View style={{flex:1}}><Text style={s.title}>Price</Text></View>
        </View>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) =>
          <View style={s.titleC}>
            <View style={{flex:1}}><Text style={s.text}>{item.id}</Text></View>
            <View style={{flex:2}}><Text style={s.text}>{item.product_name}</Text></View>
            <View style={{flex:1}}><Text style={s.text}>{item.price}</Text></View>
          </View>
          }
          keyExtractor={(item, index) => index.toString()}
        />

        <View>
          <Text style={s.MenC}>TOTAL : {this.state.Total}</Text>
        </View>
        <TouchableOpacity style={s.buttonContainer}  onPress={() => this.OrderFunction()}>
          <Text style={s.button}>ORDER</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

  const s = StyleSheet.create({
  container: {
  flex:1,
  },
  title: {
    color:'black',
    fontSize: 22,
    fontWeight: 'normal',
  },
  text: {
    color:'black',
    fontSize: 18,
    marginTop:10,
    marginLeft:5
  },
  titleC: {
    alignItems:'center',
    flexDirection:'row',
    marginTop:20,
    marginLeft:18
  },
  MenC: {
    color:'black',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:20,
    marginLeft:10
  },
  buttonContainer:{
    backgroundColor:'brown',
    paddingVertical:20
  },
  button: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight:'700'
  }
});
