import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import ImgCard from "./card";
import Movies from "./movies";
import HomePage from "./homePage";
import MovieDetails from "./movieDetails";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Modules from "./modules";
import CameraApp from "./Components/camera";
import ImagePickerApp from "./Components/imagePicker";
import BoardClip from "./Components/boardClip";
import BattaryApp from "./Components/battary";
import AppCalender from "./Components/calendar";
import AppContacts from "./Components/contacts";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"></StatusBar>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Movies" component={Movies} />
        <Stack.Screen name="Details" component={MovieDetails} />
        <Stack.Screen name="Services" component={Modules} />
        <Stack.Screen name="CameraApp" component={CameraApp} />
        <Stack.Screen name="PickImage" component={ImagePickerApp} />
        <Stack.Screen name="Clip" component={BoardClip} />
        <Stack.Screen name="Battary" component={BattaryApp} />
        <Stack.Screen name="Calendar" component={AppCalender} />
        <Stack.Screen name="Contacts" component={AppContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
