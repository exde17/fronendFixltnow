import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from '../components/Home';
import settings from '../components/settings';

const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator>

        <Tab.Screen name="Home" component={Home}         />
        <Tab.Screen name="Settings" component={settings} />

    </Tab.Navigator>
    
    
    /*
    <View>
      <Text>Menu</Text>
    </View>*/
  )
}



export default Menu