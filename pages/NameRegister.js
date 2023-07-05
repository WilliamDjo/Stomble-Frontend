import React, { useContext } from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";

import Button from "../components/Button";
import Bar from "../components/Bar";

import { VerifyContext } from "../components/ValueContext";

export default function NameRegister() {
  const { fullName, setFullName } = useContext(VerifyContext);

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <View style={styles.progressBar}>
          <Bar progress={0.3} />
        </View>
        <Text style={styles.textBody}>Create your Stomble Account</Text>
        <View style={styles.container}>
          <Text style={styles.text}>What is your Full Name?</Text>
          <TextInput
            style={styles.input}
            onChangeText={setFullName}
            value={fullName}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="CONTINUE" page="BirthDateRegister"></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#00004d",
  },
  body: {
    flex: 1,
    width: "90%",
    marginHorizontal: "5%",
  },
  progressBar: {
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 40,
  },
  textBody: {
    color: "white",
    textAlign: "left",
    fontSize: 18,
    fontFamily: "DM-Sans",
  },
  text: {
    color: "white",
  },
  input: {
    height: 40,
    marginTop: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#d0d0e1",
    color: "white",
    borderRadius: 5,
  },
  container: {
    paddingTop: 30,
    flex: 3,
  },

  buttonContainer: {
    flex: 1,
    marginTop: 100,
  },
});
