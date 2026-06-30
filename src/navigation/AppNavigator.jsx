import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            fontWeight: "700",
            color: "#111111",
          },
          contentStyle: {
            backgroundColor: "#ffffff",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Instagram",
          }}
        />

        <Stack.Screen
          name="PostDetail"
          component={PostDetailScreen}
          options={{
            title: "Publicación",
          }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Perfil",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
