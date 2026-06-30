import React from "react";
import { StatusBar } from "expo-status-bar";
import AppNavigator from "./navigation/AppNavigator";

export default function Layout() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#ffffff" />
      <AppNavigator />
    </>
  );
}
