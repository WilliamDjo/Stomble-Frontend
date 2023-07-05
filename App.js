import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import PhoneNumberRegister from "./pages/PhoneNumberRegister";
import NameRegister from "./pages/NameRegister";
import BirthDateRegister from "./pages/BirthDateRegister";
import GenderResgister from "./pages/GenderResgister";
import EnterPassword from "./pages/EnterPassword";
import VerifyCode from "./pages/VerifyCode";
import AccountType from "./pages/AccountType";
import SaveLoginInfo from "./pages/SaveLoginInfo";
import End from "./pages/End";
// import { ValueProvider } from "./components/ValueContext";
import { VerifyContext } from "./components/ValueContext";

SplashScreen.preventAutoHideAsync();

export default function App() {
  //const
  const Stack = createStackNavigator();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [birthDate, setBirthDate] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <NavigationContainer>
      {/* <ValueProvider> */}
      <VerifyContext.Provider
        value={{
          phoneNumber,
          setPhoneNumber,
          fullName,
          setFullName,
          password,
          setPassword,
          gender,
          setGender,
          birthDate,
          setBirthDate,
        }}
        r
      >
        <Stack.Navigator headerBackTitleVisible={true}>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Sign Up",
              headerStyle: {
                backgroundColor: "#00004d",
              },
              headerTintColor: "white", // "#00004d"
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShadowVisible: false,
            }}
            name="PhoneNumberRegister"
            component={PhoneNumberRegister}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Sign Up",
              headerStyle: {
                backgroundColor: "#00004d",
              },
              headerTintColor: "white", // "#00004d"
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShadowVisible: false,
            }}
            name="NameRegister"
            component={NameRegister}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Sign Up",
              headerStyle: {
                backgroundColor: "#00004d",
              },
              headerTintColor: "white", // "#00004d"
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShadowVisible: false,
            }}
            name="BirthDateRegister"
            component={BirthDateRegister}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Sign Up",
              headerStyle: {
                backgroundColor: "#00004d",
              },
              headerTintColor: "white", // "#00004d"
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShadowVisible: false,
            }}
            name="GenderRegister"
            component={GenderResgister}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Set up password",
              headerStyle: {
                backgroundColor: "#00004d",
              },
              headerTintColor: "white", // "#00004d"
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShadowVisible: false,
            }}
            name="EnterPassword"
            component={EnterPassword}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Verify code",
              headerStyle: {
                backgroundColor: "#00004d",
              },
              headerTintColor: "white", // "#00004d"
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShadowVisible: false,
            }}
            name="VerifyCode"
            component={VerifyCode}
          />
          <Stack.Screen
            options={{
              headerShown: true,
              headerBackTitleVisible: false,
              headerTitle: "Sign Up",
              headerStyle: {
                backgroundColor: "#00004d",
              },
              headerTintColor: "white", // "#00004d"
              headerTitleStyle: {
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
              },
              headerShadowVisible: false,
            }}
            name="AccountType"
            component={AccountType}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="SaveLoginInfo"
            component={SaveLoginInfo}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="End"
            component={End}
          />
        </Stack.Navigator>
      </VerifyContext.Provider>
      {/* </ValueProvider> */}
    </NavigationContainer>
  );
}
