import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { NativeBaseProvider } from "native-base";

import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

export default function SaveLoginInfo() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("End");
  };
  return (
    <NativeBaseProvider>
      <View style={styles.root}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>Save your login info?</Text>
          <Text style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel
            pellentesque velit. Maecenas eget vestibulum lacus. Ut et congue
            elit. Lorem ipsum dolor sit amet, conse
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="SAVE" page="saveLoginInfo" />
          <View style={styles.smallContainer}>
            <Pressable onPress={onPress}>
              <Text style={styles.smallText}>Not Now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#00004d",
  },

  textContainer: {
    flex: 3,
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 70,
  },
  textHeading: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
    fontFamily: "DM-Sans",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 100,
  },

  text: {
    color: "white",
    marginTop: 10,
    fontSize: 14,
    textAlign: "center",
  },
  smallContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  smallText: {
    color: "white",
    fontWeight: "bold",
  },
});
