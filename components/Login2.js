import React, { Component } from 'react';
import {Alert,TouchableOpacity, TextInput, Platform, StyleSheet, Text, View,  AppRegistry, Image,ImageBackground, KeyboardAvoidingView,StatusBar} from 'react-native';
import LoginForm from './LoginForm';
import { StackActions, NavigationActions } from 'react-navigation';
import { createTabNavigator, TabBarBottom } from 'react-navigation';

class Login2 extends Component{

  constructor(props) {
    super(props)
    this.state = {
      UserEmail: '',
      UserPassword: ''
    }

  }


UserLoginFunction = () =>{

 const { UserEmail }  = this.state ;
 const { UserPassword }  = this.state ;


fetch('http://127.0.0.1:8000/api/login', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
   'Content-Type': 'application/json',
  },
  body: JSON.stringify({

    email: UserEmail,
    password: UserPassword

  })

}).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson.res == 'success')
          {

              const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'HomeScreen', params: { name: responseJson.name } })],
              });
              this.props.navigation.dispatch(resetAction);

          }
          else{

            Alert.alert(responseJson.res);
          }

      }).catch((error) => {
        console.error(error);
      });

  }

  render() {
    return (
      <ImageBackground
      style={{flex:1}}
      source={require('../images/i/bck.jpg')}>
        <StatusBar hidden={true} />
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">
          <View style={styles.contain}>
            <Text style={styles.title}>Dine in-time</Text>
            <View style={styles.container}>
              <TextInput
                style={styles.input}
                onChangeText={UserEmail => this.setState({UserEmail})}
                underlineColorAndroid='transparent'
                placeholder="Email"
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="next"
                onSubmitEditing={()=> this.passwordInput.focus()}
              />
              <TextInput
                style={styles.input}
                onChangeText={UserPassword => this.setState({UserPassword})}
                underlineColorAndroid='transparent'
                placeholder="Password"
                secureTextEntry
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="go"
                ref = {(input)=>this.passwordInput=input}
              />
              <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.UserLoginFunction()}>
                <Text style={styles.button}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

class SignUp extends Component{

  constructor(props) {
    super(props)
    this.state = {
      UserName: '',
      UserEmail: '',
      UserPassword: '',
      UsercPassword: ''
    }
  }



  Navigation(){

  if(this.state.UserPassword!=this.state.UsercPassword){
      Alert.alert("Passwords do not match.");
    }


  else if((this.state.UserName!="")&&(this.state.UserEmail!="")&&(this.state.UserPassword!="")&&(this.state.UsercPassword!="")){

       const { UserName }  = this.state ;
       const { UserEmail }  = this.state ;
       const { UserPassword }  = this.state ;
       const { UsercPassword }  = this.state ;


      fetch('http://127.0.0.1:8000/api/signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
         'Content-Type': 'application/json',
        },
        body: JSON.stringify({

          name: UserName,
          email: UserEmail,
          password: UserPassword

        })

      }).then((response) => response.json())
            .then((responseJson) => {


            }).catch((error) => {
              console.error(error);
            });

        this.props.navigation.navigate("Login");
     }

     else{
       Alert.alert("Please fill all the fields.");
     }

  }

  render() {
    return (
      <ImageBackground
      style={{flex:1,}}
      resizeMode='cover'
      source={require('../images/i/SignUp3.jpg')}>
        <StatusBar hidden={true} />
        <KeyboardAvoidingView style={{flex:1}} behavior="padding">
          <View style={styles.contain}>
            <Text style={styles.title2}>Dine in-time</Text>
            <View style={styles.container2}>
              <TextInput
                style={styles.input}
                onChangeText={UserName => this.setState({UserName})}
                underlineColorAndroid='transparent'
                placeholder="Name"
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="next"
                onSubmitEditing={()=> this.eInput.focus()}
              />
              <TextInput
                style={styles.input}
                onChangeText={UserEmail => this.setState({UserEmail})}
                underlineColorAndroid='transparent'
                placeholder="Email"
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="next"
                ref = {(input)=>this.eInput=input}
                onSubmitEditing={()=> this.passwordInput.focus()}
              />
              <TextInput
                style={styles.input}
                onChangeText={UserPassword => this.setState({UserPassword})}
                underlineColorAndroid='transparent'
                placeholder="Password"
                secureTextEntry
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="next"
                ref = {(input)=>this.passwordInput=input}
                onSubmitEditing={()=> this.cpasswordInput.focus()}
              />
              <TextInput
                style={styles.input}
                onChangeText={UsercPassword => this.setState({UsercPassword})}
                underlineColorAndroid='transparent'
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor='rgba(255,255,255,0.7)'
                returnKeyType="go"
                ref = {(input)=>this.cpasswordInput=input}
              />
              <TouchableOpacity style={styles.buttonContainer}  onPress={() => this.Navigation()}>
                <Text style={styles.button}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default createTabNavigator(
{
  Login: { screen: Login2 },
  Sign_Up: { screen: SignUp },
},
{
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: 'black',
      },
      labelStyle: {
        fontSize: 18,
      },
      activeTintColor: 'tomato',
      inactiveTintColor: 'white',
    },
}
);

const styles = StyleSheet.create({
  contain: {
    marginTop:50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color:'white',
    fontSize:30,
  },
  title2: {
    color:'black',
    fontSize:30,
  },
  container: {
    padding:30,
    marginTop:180,
  },
  container2: {
    padding:30,
    marginTop:60,
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
  },
});
