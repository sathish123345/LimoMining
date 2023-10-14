import { View, Text } from "react-native";
import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./RootNavigator";

export const Navigation = () => {
  const routeNameRef = React.useRef<any>();
  const navigationRef = React.useRef<any>(null);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routeNameRef.current = navigationRef.current?.getCurrentRoute().name)
      }
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute().name;
        if (previousRouteName !== currentRouteName) {
          console.log(currentRouteName);
        }
        // Save the current route name for later comparison
        routeNameRef.current = currentRouteName;
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
