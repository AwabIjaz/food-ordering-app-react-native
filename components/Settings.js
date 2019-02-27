import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,  AppRegistry, Image, ScrollView, TouchableHighlight} from 'react-native';
import {Icon,Button,Body,Title,Right,Container,Header,Content,Left,DeckSwiper, Card, CardItem, Thumbnail} from 'native-base'

const cards = [
  {
    text: 'Dine in time',
    name: 'One',
    image: require('../images/i/bck.jpg'),
  },
  {
    text: 'Dine in time',
    name: 'Two',
    image: require('../images/i/images.jpg'),
  },
  {
    text: 'Dine in time',
    name: 'Three',
    image: require('../images/i/SignUp3.jpg'),
  },
];

class Settings extends Component{
  render(){
    return(
      <Container style={{marginTop:23}}>

      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("HomeS")}
          >
          <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>About</Title>
        </Body>
        <Right />
      </Header>

          <View>
          <DeckSwiper
        dataSource={cards}
        renderItem={item =>
          <Card style={{ elevation: 3 }}>
            <CardItem>
              <Left>
                <Thumbnail source={item.image} />
                <Body>
                  <Text>{item.text}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image style={{ height: 300, flex: 1 }} source={item.image} />
            </CardItem>
            <CardItem>
              <Icon name="heart" style={{ color: '#ED4A6A' }} />
              <Text>{item.name}</Text>
            </CardItem>
          </Card>
        }
      />
          </View>
      </Container>
    );
  }
}

export default Settings;
