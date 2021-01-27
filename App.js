import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Quiz from "./app/screens/Quiz";
import Home from "./app/screens/Home";
import config from "./app/config";
import Result from "./app/screens/Result";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: config.secondaryColor,
          },
          headerTintColor: config.textColor,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{ title: "Quiz" }}
        />
        <Stack.Screen
          name="Result"
          component={Result}
          options={{ title: "Result" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
