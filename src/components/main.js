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
import Settings from "../screens/settings";
import SignIn from "../screens/signin";
import { useSelector } from "react-redux";
import { AsyncGetItem } from "./Helpers";
import Search from "../screens/search";

const HomeScreen = () => {
  const user = useSelector(({ user }) => user);
  const isLoggedIn = user?.isLoggedIn;
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Discover} />
      <Tab.Screen name="Add Cart" component={Cart} />
      <Tab.Screen name="Collections" component={Collections} />
      {/* <Tab.Screen name="Account" component={Account} /> */}
      <Tab.Screen name="Account" component={!isLoggedIn ? SignIn : Account} />
    </Tab.Navigator>
  );
};

const Main = () => {
  const Stack = createNativeStackNavigator();
  const user = useSelector(({ user }) => user);
  const isLoggedIn = user?.isLoggedIn;
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user.onBoarded && <Stack.Screen name="Welcome" component={Welcome} />}
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        {!isLoggedIn && (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={SignUp} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="SuccessVerify" component={SuccessVerify} />
          </>
        )}
        {isLoggedIn && (
          <>
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="settings" component={Settings} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
