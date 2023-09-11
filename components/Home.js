import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

function Home( {navigation} ){
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Atras</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home