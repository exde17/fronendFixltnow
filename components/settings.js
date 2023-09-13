import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style = {styles.margen}>
      <Text>settings</Text>
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

export default Settings