import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

import Home from '../components/Home';
import settings from '../components/Settings';

const Tab = createBottomTabNavigator();

function Menu() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>

        <Tab.Screen name="Home" 
        component={Home} 
        options={{tabBarLabel: 'Inicio', 
        tabBarIcon: ({ color, size}) => 
        ( <FontAwesome name="home" color={color} size={size} /> ), }}  />
        
        
        <Tab.Screen name="Settings" 
        component={settings}
        options={{tabBarLabel: 'Inicio', 
        tabBarIcon: ({ color, size}) => 
        ( <FontAwesome name="gear" color={color} size={size} /> ), }}  />

    </Tab.Navigator>
    
    /*
    <View>
      <Text>Menu</Text>
    </View>*/
  )
}



export default Menu