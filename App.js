import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MapApp from './src/map';
import HomeScreen from "./src/HomeScreen"
import DetailsScreen from "./src/details"
import ListOfItems from "./src/listOfProducts"
import SignUp from "./src/signUp"
import Login from "./src/login"
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="MapApp" component={MapApp} />
        <Stack.Screen name="ListOfItems" component={ListOfItems} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;