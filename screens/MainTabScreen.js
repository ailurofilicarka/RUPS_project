import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import TicketsScreen from './TicketsScreen';
import MapScreen from './MapScreen';
import DetailsScreen from './DetailScreen';
import { Button } from 'react-native-paper';

const HomeStack = createNativeStackNavigator();
const TicketsStack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home" //The name of the route to render on first load of the navigator.
      activeColor="#fff263" //Custom color for icon and label in the active tab.
      inactiveColor='#c49000' //Custom color for icon and label in the inactive tab.
      barStyle={{backgroundColor: "#002171"}} //Style for the bottom navigation bar. You can pass custom background color here
      backBehavior='history' //return to last visited screen in the navigator
      shifting={false} // true - the active tab icon shifts up to show the label and the inactive tabs won't have a label
      labeled={true} //show labels in tabs
    >
        <Tab.Screen
            name="Tickets"
            component={TicketsScreen}
            options={{
                tabBarLabel: 'Buy ticket',
                tabBarIcon: ({color}) => (
                    <Entypo name="ticket" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'Home screen',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
                tabBarLabel: 'Map',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="map" color={color} size={26}/>
                ),
            }}
        />    
        <Tab.Screen
            name="Details"
            component={DetailsScreen}
            options={{
                tabBarLabel: 'Details',
                tabBarIcon: ({color}) => (
                    <Ionicons name="document-text-outline" color={color} size={23}/>
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerShown: false,
        // headerStyle: {
        //     backgroundColor: '#fff',
        // },
        // headerTintColor: '#fff',
        // headerTitleStyle: {
        //     fontWeight: 'bold'
        // }
    }}>
        <HomeStack.Screen name="HomeSreennnn" component={HomeScreen} options={{
        title:'',
        // headerRight: () => (
        //     <Icon.Button name="menu" size={26} backgroundColor="#fff"></Icon.Button>
        //   )
        }} />
</HomeStack.Navigator>
);

  