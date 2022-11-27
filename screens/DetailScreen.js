import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";

const Stack = createNativeStackNavigator();

function DetailsScreen({navigation}) {
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
      <View style={[styles.box]}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.label}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.box, {backgroundColor: "black"}, {height: 1}]}/>
      <View style={[styles.box]}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.label}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.box, {backgroundColor: "black"}, {height: 1}]}/>
      <View style={[styles.box]}/>
    </View>
  );
}

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 3,
    padding: 20,
  },
  box: {
    width: "100%",
    height: 60,
    backgroundColor: "lightgray",
  },
  label: {
    textAlign: "left",
    marginLeft: 10,
    marginTop: 15,
    fontSize: 20,
  },
});