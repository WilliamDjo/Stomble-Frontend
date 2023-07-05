import React, { useCallback } from "react";

import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import Button from "../components/Button";

export default function Home(props) {
  const [fontsLoaded] = useFonts({
    "DM-Sans": require("../assets/fonts/DM_Sans/DMSans-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  //onPress To Navigate
  const onPress = () => {
    props.navigation.navigate("PhoneNumberRegister");
  };
  return (
    <SafeAreaView style={styles.wrapper} onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <Text style={styles.title}>stomble</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="LOG IN" page="logIn"></Button>
        <View style={styles.regContainer}>
          <Text style={styles.text}>Don't have an account?</Text>
          <Pressable onPress={onPress}>
            <Text style={styles.regButtonText}>Register Now</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.skipButtonContainer}>
        <Pressable style={styles.skipButton}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#00004d",
  },
  container: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 55,
    fontFamily: "DM-Sans",
    color: "white",
  },
  buttonContainer: {
    flex: 2,
  },

  skipButtonContainer: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  skipButton: {
    backgroundColor: "rrgba(60, 60, 60, 0.5)",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  skipButtonText: {
    color: "white",
    fontSize: 12,
  },
  regContainer: {
    flexDirection: "row",
    marginHorizontal: 30,
    justifyContent: "space-around",
    marginVertical: 20, // Adjust this value to make the "Register Now" view closer to the "Log In" view
    marginHorizontal: 60,
    // backgroundColor: "black",
  },
  regButtonText: {
    color: "white",
    fontWeight: "700",
  },
  text: {
    color: "white",
  },
});
