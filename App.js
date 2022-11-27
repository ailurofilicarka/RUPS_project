import * as React from 'react';
import 'react-native-gesture-handler';
import { Button, View, Text, StyleSheet, useState, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { withNavigation } from '@react-navigation';

import MainTabScreen from './screens/MainTabScreen';
import DetailsScreen from './screens/DetailScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();

function App({navigation}) {  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#002171",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: 'bold',
          color: "#c49000"
        }
      }}>
        <Stack.Screen name="HomeStack" component={MainTabScreen} options= {{
          title: "Mestni prevoz",
          color: "#002171",
          headerRight: () => (
            <Button
              title="Details"
              color="#c49000"
            />
          )
        }}/>
        <Stack.Screen name="Details" component={DetailsScreen}></Stack.Screen>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{title:'Sign In'}}></Stack.Screen>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{title:'Sign Up'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
// export default withNavigation(App);