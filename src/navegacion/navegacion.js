import React from "react";
import Peliculas from "../pantallas/peliculas";
import Proximamente from "../pantallas/proximamente";
import Series from "../pantallas/series";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet } from "react-native-web";

const Tab = createBottomTabNavigator();

export default function Navegacion(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: "#4A235A",
            tabBarInactiveTintColor: "#A569BD",
            tabBarStyle: {
              backgroundColor:'#E8DAEF'
            },
            tabBarLabelStyle: {
              fontSize: 10,
            },
          }}>
            <Tab.Screen name="peliculas" component={Peliculas} options={{title:'Películas', tabBarLabel: 'Películas',
            tabBarIcon: ({ color, size }) => (<Ionicons name="star" color={color} size={33} />), headerTintColor:'#4A235A',headerStyle:{backgroundColor:'#E8DAEF'} }} ></Tab.Screen>
            <Tab.Screen name="series" component={Series} options={{title:'Series' ,tabBarLabel: 'Series',
            tabBarIcon: ({ color, size }) => (<Ionicons name="play" color={color} size={33} />), headerTintColor:'#4A235A',headerStyle:{backgroundColor:'#E8DAEF'}}}></Tab.Screen>
            <Tab.Screen name="proximamente" component={Proximamente} options={{title:'Próximamente',tabBarLabel: 'Próximamente',
            tabBarIcon: ({ color, size }) => (<Ionicons name="eye" color={color} size={33} />), headerTintColor:'#4A235A',headerStyle:{backgroundColor:'#E8DAEF'} }}></Tab.Screen>
        </Tab.Navigator>
    );
}
