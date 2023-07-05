import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

export default function SignUpHeader(props) {
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
  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <Text style={styles.logo}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 40,
  },
  logo: {
    fontSize: 20,
    fontFamily: "DM-Sans",
    color: "white",
  },
});
