
import React, { Component } from "react";

import Inicio from "./src/inicio";

import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';

import Login from './src/screens/drawer/login';
import Registro from './src/screens/drawer/registro';
import Perfil from './src/screens/drawer/perfil';
import  Api from './src/screens/drawer/Api'



import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import { startClock } from "react-native-reanimated";
//Isaac Marcelino Barron Velazco

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MaterialbottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {
  createHomeStack = () =>
  <Stack.Navigator initialRouteName="Inicio">
    <Stack.Screen name="Inicio" component = {Inicio}></Stack.Screen>
    <Stack.Screen name="Inicio de sesión" component = {Login}></Stack.Screen>
    <Stack.Screen name="Registro" component = {Registro}></Stack.Screen>
    <Stack.Screen name="Perfil" component = {Perfil}></Stack.Screen>
    <Stack.Screen name="Api" component = {Api}></Stack.Screen>
  </Stack.Navigator>
  
  render(){
   
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" children={this.createHomeStack} />
        <Drawer.Screen name="Contacto" component={Screen1} />
        <Drawer.Screen name="Favoritos" component={Screen2} />
        <Drawer.Screen name="Ajustes" component={Screen3}/>
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}
