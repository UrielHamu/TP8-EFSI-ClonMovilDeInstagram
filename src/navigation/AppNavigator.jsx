import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import PostDetailScreen from "../screens/PostDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 62,
          backgroundColor: "#ffffff",
          borderTopWidth: 0.5,
          borderTopColor: "#dddddd",
          paddingBottom: 8,
          paddingTop: 6,
        },
        tabBarActiveTintColor: "#111111",
        tabBarInactiveTintColor: "#999999",
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 23, color }}>⌂</Text>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <Text style={{ fontSize: 23, color }}>◎</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTabs"
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
          name="MainTabs"
          component={MainTabs}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}