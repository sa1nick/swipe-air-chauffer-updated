import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TutorialScreen from "../screens/tutorial/TutorialScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import MobileNumberScreen from "../screens/auth/MobileNumberScreen";
import OTPScreen from "../screens/auth/OTPScreen";
import DriverInformation from "../screens/driverInformation/DriverInformation";
import BottomTabBar from "../components/BottomTabBar";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const screenOptions = {
    header: () => null,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName="BottomTabBar"
      >
        <Stack.Screen name="TutorialScreen" component={TutorialScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="MobileNumberScreen"
          component={MobileNumberScreen}
        />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
        <Stack.Screen name="DriverInformation" component={DriverInformation} />
        <Stack.Screen name="BottomTabBar" component={BottomTabBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
