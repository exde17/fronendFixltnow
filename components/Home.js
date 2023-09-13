import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

function Home( {navigation} ){
  return (
    <View style={styles.margen}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Atras</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({

  margen: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Home