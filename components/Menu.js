import React, { Component } from 'react';
import {ImageBackground,Alert, FlatList, Platform, StyleSheet, Text, View,  AppRegistry, Image, ScrollView, TouchableHighlight} from 'react-native';
import DrawerNavigator from 'react-navigation';
import {Icon,Button,Body,Right,Title,Container,Header,Content,Left,Card, CardItem,Thumbnail,Badge} from 'native-base';

var x=0,old_name="",sum=0,y=0;
var id_arr=[],name_arr=[],price_arr=[],quantity_arr=[];
var image="",name="";


export default class Menu extends Component{
  constructor(props){
    super(props);
    image=this.props.navigation.getParam('itemIm',"")
    name=this.props.navigation.getParam('itemNm',"")
    this.state = {
      isLoading: true,
      c:y,
    }
  }


  componentDidMount(){

  return fetch('http://127.0.0.1:8000/api/list', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
     'Content-Type': 'application/json',
    },
    body: JSON.stringify({

      id: this.props.navigation.getParam('itemId',0)

    })

  }).then((response) => response.json())
        .then((responseJson) => {

          this.setState({
            isLoading: false,
            dataSource: responseJson,
          }, function(){

          });


        })
        .catch((error) =>{
          console.error(error);
        });
    }

    cat(c_name){
      if(x==0){
      x=1;
      old_name=c_name;
      return <Text style={s.title}>{c_name}</Text>;
    }
    else{
      if(old_name==c_name){
        return <Text></Text> ;
      }
      else{
        old_name=c_name;
        return <Text style={s.title2}>{c_name}</Text>;
      }
    }
    }

    order_cal(id,price,name){
      sum=sum+price;
      id_arr[y]=id;
      if(isNaN(quantity_arr[id])){
      quantity_arr[id]=1;
      }
      else{
      quantity_arr[id]=quantity_arr[id]+1;
      }
      name_arr[y]=name;
      price_arr[y]=price;
      y++;
      this.setState({c:y});
    }

    cart(id,price,name,sum,quantity){
        if(y!=0){
          this.setState({c:0});
          this.props.navigation.navigate('CartScreen',{
            itmId:id,
            itmPrice:price,
            itmName:name,
            itmSum:sum,
            itmQuantity:quantity,
            onNavigateBack: this.check
          });
      }
      else{
        Alert.alert("Cart is empty.");
      }
    }

    clear_cart(){
      y=0;
      this.setState({c:y});
      id_arr=[];
      quantity_arr=[];
      sum=0;
    }

    check(){
        y=0;
        id_arr=[];
        quantity_arr=[];
        sum=0;
    }

  render() {
    return (
      <View style={s.container}>
      <ImageBackground source={{uri: image}} style={{height: 230, width: null}}>
      <Header span style={{backgroundColor:'rgba(0,0,0,0.1)',marginTop:23}}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("HomeS")}
          >
          <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title style={{fontWeight:'bold'}}>{name} Menu:</Title>
        </Body>
        <Right>
          <Button transparent onPress={()=>this.cart(id_arr,price_arr,name_arr,sum,quantity_arr)}>
            <Title>View Cart <Text>{this.state.c}</Text> </Title>
          </Button>
          <Text> </Text>
          <Button transparent onPress={()=>this.clear_cart()}>
            <Title>Clear Cart</Title>
          </Button>
        </Right>
      </Header>
      </ImageBackground>

        <Card>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) =>
            <View style={{flex:1}}>
              <View style={s.titleC}>{this.cat(item.category)}</View>
              <TouchableHighlight underlayColor='transparent' onPress={()=>this.order_cal(item.item_id,item.price,item.product_name)}>
                <CardItem>
                <Body><Text style={s.text}>{item.product_name}  Rs. {item.price}</Text></Body>
                <Right>
                  <Icon active name='add'  style={{fontSize: 20, color: 'green'}}/>
                </Right>
               </CardItem>
              </TouchableHighlight>
            </View>
            }
            keyExtractor={(item, index) => index.toString()}
          />
        </Card>

      </View>

    );
  }
}

  const s = StyleSheet.create({
  container: {
  flex:1,
  },
  titleC: {
    marginLeft:10,
  },
  title: {
    color:'black',
    fontSize: 30,
    fontWeight: 'normal',
  },
  title2:{
    marginTop:30,
    marginBottom:10,
    color:'black',
    fontSize: 30,
    fontWeight: 'normal',
  },
  text: {
    color:'black',
    fontSize: 15,
  },
  MenC: {
    justifyContent:'center',
    alignItems:'center'
  }
});
