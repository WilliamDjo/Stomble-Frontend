import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function End() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>End of App!</Text>
      <Text style={styles.text}> Reload the app to restart.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
});
