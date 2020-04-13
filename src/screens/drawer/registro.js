
import React, { Component } from "react";
import  api from '../data/api';
import { Container,  Content, Card, CardItem, Text, Body, Button, Item, Label, Input, Icon, View } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import {
  Alert,
  StyleSheet,
} from 'react-native';


class Registro extends Component {
  
  constructor(props){
    super(props)
    this.state={
      user: '',
      pass: '',
      email: ''
    }
  }

  register = () => api.registerData(this.state.user,this.state.pass,this.state.email);
 
  userRegister = () =>{ 

    const {user} = this.state;
    const {pass} = this.state;
    const {email} = this.state;

    fetch('http://192.168.1.67/iot/data/registrar.php',{ 
      method: 'post',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        pUsuario: user,
        pPass: pass,
        pEmail: email
      })

    })
    .then((response) => response.text())
      .then((responseData) =>{
       
        Alert.alert("¡Registro exitoso!");
        
      
      })
      .catch((error)=>{
          console.error(error);
      
      });
      
  }
 
  
  render() {
    const navegar = this.props.navigation;
    return (
    <>
      <Container>
       <Content padder contentContainerStyle = {misEstilos.content}>
         <Card>
           <CardItem header bordered style = {misEstilos.arribaTexto}>
             <Text style = {misEstilos.textCenter} >Registrate</Text>
           </CardItem>
           <CardItem>
             <Body style = {misEstilos.body}>
                 
                 
                   <Item lineLabel>
                     <Icon type = 'FontAwesome' name = 'user'></Icon>
                     <Input placeholder= 'Nombre de usuario'/>
                   </Item>
                 <Item lineLabel>
                   <Icon type = 'Entypo' name = 'email'></Icon>
                   <Input placeholder = 'Ingresa un correo'/>
                 </Item>
                 <Item lineLabel>
                   <Icon type = 'FontAwesome' name = 'lock'></Icon>
                   <Input placeholder = 'Constraseña'/>
                 </Item>
                   <Item lineLabel>
                       <Icon type = 'FontAwesome' name = 'lock'></Icon>
                       <Input placeholder = 'Confirma tu contraseña'/>
                   </Item>

             </Body>
           </CardItem>
           <CardItem>
           <Button style = { loginButton.loginButton} onPress={this.mensaje} ><Text> Registrar</Text></Button>
           </CardItem>
           <CardItem>
           <Text style={misEstilos1.textCenter}>Registrate con:</Text>
             </CardItem>
           <CardItem>  
             <Button style = {loginIcon.google }onPress={this.mensaje} ><Icon type = 'FontAwesome' name = 'google'></Icon></Button>
             </CardItem>
           <CardItem>
             <Button style = { loginIcon.facebook} onPress={this.mensaje}><Icon type = 'FontAwesome' name = 'facebook-f'></Icon></Button>
           </CardItem>
         </Card>
       </Content>
     </Container>
   </>
    );
  }
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  
  },

  textCenter: {
    textAlign: 'center',
    width: '100%',
    color: 'white'
  },

  pie: {
    justifyContent: 'center',
  },

  centrar: {
    flex: 3,
    marginLeft: '50%',
    justifyContent: 'center'
  },

  izquierda: {
    flex: 3,
    justifyContent:  'center'
  },

  body: {
    paddingVertical: 35,
  },
  arribaTexto: {
    backgroundColor: '#2874A6'
  },
});


const  misEstilos1 = StyleSheet.create({
  contex: {
    flex: 1,
    justifyContent: 'center' , 
    },
    textCenter:{
      textAlign: 'center',
      width: '100%',
    },
    Button: {
      alignItems: 'center',
    },
    body: {
      paddingVertical: 35,
    },
  })


  const loginButton = StyleSheet.create({
    loginButton: {
      width: '100%',
      height: '135%',
      justifyContent: 'center',
      alignItems: 'center',
   }
});

const loginIcon = StyleSheet.create({
  google:{
    width: '100%',
    height: '135%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d34836',
  },
  facebook:{
    width: '100%',
    height: '135%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998'
  }
})

export default Registro;