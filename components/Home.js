import React, { Component } from 'react';
import { TextInput,FlatList, Platform, StyleSheet, Text, View,  AppRegistry, Image, ScrollView, TouchableHighlight} from 'react-native';
import DrawerNavigator from 'react-navigation';
import {Icon,Button,Body,Right,Title,Container,Header,Content,Left,Card, CardItem, Thumbnail} from 'native-base';

import Settings from './Settings';
import SideMenu from './SideMenu';
import Logout from './Logout';
import {createDrawerNavigator} from 'react-navigation';


var uName="";

class Home extends Component{
  constructor(props){
    super(props);
    uName=this.props.navigation.getParam('name',"");
    console.log(uName);
    this.state = {
      isLoading: true,
      text:''
    }

    this.arrayholder = [] ;
  }


GetListViewItem (fruit_name) {

   Alert.alert(fruit_name);

  }


SearchFilterFunction(text){

     const newData = this.arrayholder.filter(function(item){
         const itemData = item.name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: newData,
         text: text
     })
 }



  componentDidMount(){
    return fetch('http://127.0.0.1:8000/api/restaurants')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

        this.arrayholder = responseJson ;

      })
      .catch((error) =>{
        console.error(error);
      });


  }


  details = (rid,rim,rname) =>{
    this.props.navigation.navigate('MenuScreen',{
      itemId:rid,
      itemIm:rim,
      itemNm:rname
    });
    }

  render() {
    return (

      <View style={{flex:1}}>
      <Header style={{marginTop:23}}>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.openDrawer()}
          >
          <Icon name="ios-menu" />
          </Button>
        </Left>
        <Body>
          <Title>Order before you dine in.</Title>
        </Body>
      </Header>

      <TextInput
       style={s.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Search for restaurants"
        />

      <ScrollView>
      <View style={s.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <TouchableHighlight underlayColor='white' onPress={()=>this.details(item.id,item.image,item.name)}>

                      <Card>
                         <CardItem>
                          <Left>
                            <Thumbnail source={require('../images/i/images.jpg')} />
                            <Body>
                              <Text>Dine in time</Text>
                            </Body>
                          </Left>
                         </CardItem>
                         <CardItem cardBody>
                          <Image source={{uri: item.image}} style={{height: 220, width: null, flex: 1}}/>
                         </CardItem>
                         <CardItem>
                          <Left>
                            <Body>
                              <Text style={s.text}>{item.name}</Text>
                            </Body>
                          </Left>
                          <Right>
                            <Button transparent>
                            <Icon active name="thumbs-up"/>
                              <Text> 5 Stars</Text>
                            </Button>
                          </Right>
                         </CardItem>
                      </Card>


            </TouchableHighlight> }
            keyExtractor={(item, index) => index.toString()}
          />
      </View>
      </ScrollView>
      </View>
    );
  }
}


export default Drawer = createDrawerNavigator({
  HomeS: {
    screen: Home
  },
  SettingsScreen: {
    screen: Settings
  },
  LogoutScreen: {
    screen: Logout
  }

},{
    initialRouteName: "HomeS",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideMenu name={uName} {...props} />
  });

  const s = StyleSheet.create({
  container: {
  flex:1,
  },
  titleC: {
    alignItems:'center',
    marginTop:25,
  },
  title: {
    color:'black',
    fontSize: 25,
    fontWeight: 'normal',
  },
  text: {
    color:'black',
    fontSize: 20,
  },
  imageC: {
    flexDirection:'row',
    marginTop:20,
  },
  image: {
    resizeMode:'cover',
    height:230
  },
  TextInputStyleClass:{
   marginTop:5,
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
   }
});
