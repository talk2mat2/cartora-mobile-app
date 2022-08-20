import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "../screens/login";
import SignUp from "../screens/signup";
import VerifyEmail from "../screens/verifyemail";
import Welcome from "../screens/welcome";
import SuccessVerify from "../screens/successVerify";
import NewPassword from "../screens/newPassword";
import Discover from "../screens/discover";
import { View } from "react-native";
import MyTabBar from "./tabbar";
import Account from "../screens/account";
import Collections from "../screens/collections";
import Cart from "../screens/cart";
const horizontalAnimation = {
    gestureDirection: 'horizontal',
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };
const HomeScreen = () => {
  
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
      screenOptions={{ headerShown: false,...horizontalAnimation }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Discover} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Collections" component={Collections} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

const Main = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
