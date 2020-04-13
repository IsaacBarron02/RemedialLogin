
import React, { Component } from 'react';
import { View, Text, Button, } from 'react-native';


import { styles } from './styles/styles';
//Isaac Marcelino Barron Velazco

class Inicio extends Component {

  render() {
    const navegar = this.props.navigation;
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Inicio</Text>
            <Button
                title='Iniciar Sesión'
                onPress={() => navegar.navigate('Inicio de sesión')}
              />
              <Text></Text>
             <Button
                title='Registrarse'
                onPress={() => navegar.navigate('Registro')}
              /> 
            
      </View>
    );
  }
}

export default Inicio;

