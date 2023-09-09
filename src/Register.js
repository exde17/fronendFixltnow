import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

function Register( {navigation} ) {
  return (
    <View style={styles.container}>
      <View style={styles.contenido}>
        <Text style={styles.titulo}>  Registro </Text>



        <TextInput 
        placeholder='User'
        style={styles.textInput}
        />

        <TextInput 
        placeholder='Email'
        style={styles.textInput}
        />
        
        <TextInput
        placeholder='Password'
        style={styles.textInput}
        />

        <TextInput
        placeholder='Confirmar Password'
        style={styles.textInput}
        />

        <TouchableOpacity>
          <Text style={styles.botonRegistrar}>
            Registrar 
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={() => navigation.navigate('Login')} > 
          <Text style={styles.botonText}>Sign In </Text> 
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkcyan',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenido: {
    backgroundColor: '#dcdcdc',
    padding: 40,
    borderRadius: 40,
  },
  titulo: {
    paddingBottom: 30,
    fontSize: 50,
    fontWeight: 'bold',
  },
  textInput: {
    paddingStart: 30,
    width: 250,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#ffff',
  },
  botonRegistrar: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
    backgroundColor: 'orange',
    margin: 30,
    borderRadius: 30,
    textAlign: 'center',
    color: '#34434D',
  },
  botonText: {
    fontSize: 17,
    textAlign: 'center',
  },
});


export default Register