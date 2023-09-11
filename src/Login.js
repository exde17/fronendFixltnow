import React from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'



function Login( {navigation} ) {
  return (
    <View style={styles.container}>

      <View style={styles.contenido}>
      
        <Text style={styles.titulo}> Login </Text>
        <Text style={styles.subTitle}> Sign In to your account </Text>
        <TextInput  
          placeholder='User o Email'
          style={styles.textInput}
        />
        <TextInput 
          secureTextEntry={true}
          placeholder='password'
          style={styles.textInput}
        />
        <Text style={styles.Password}>Has olvidado la contraseña ?</Text>
      </View>

      <TouchableOpacity style= {styles.botonLogin} > 
        <Text style={styles.text}> Login  </Text> 
      </TouchableOpacity>
      
      <TouchableOpacity style= {styles.boton}
      onPress={() => navigation.navigate('Register')} > 
        <Text style={styles.text}> Crea tu cuenta? SIGNUP </Text> 
      </TouchableOpacity>

      <TouchableOpacity style= {styles.boton}
      onPress={() => navigation.navigate('Menu')} > 
        <Text style={styles.text}> Menu </Text> 
      </TouchableOpacity>
  
    </View>
    
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    borderRadiusTop: 50,
    backgroundColor: 'darkcyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenido: {
    backgroundColor: 'darkcyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 70,
    marginTop: 50,
    color: '#34434D',
    fontWeight: 'bold',
  },
  subTitle:{
    marginTop: 100,
    fontSize: 20,
    color: 'white',
  },
  textInput: {
    paddingStart: 30,
    width: 300,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#dcdcdc'
  },
  Password: {
    fontSize: 15,
    marginTop: 20,
  },
  boton: {
    padding: 5,
    marginLeft: 150,
    borderRadius: 30,
  },
  botonLogin: {
    backgroundColor: 'orange',
    paddingHorizontal: 60,
    marginBottom: 70,
    borderRadius: 30,
    marginTop: 30,
  },
  text: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 16,
    margin: 12,
  }
});


export default Login