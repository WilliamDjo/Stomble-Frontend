import React, { useState, useContext } from "react";

import { View, Text, StyleSheet } from "react-native";

import Button from "../components/Button";
import Bar from "../components/Bar";

import { SelectList } from "react-native-dropdown-select-list";
import { VerifyContext } from "../components/ValueContext";

export default function GenderRegister() {
  const { gender, setGender } = useContext(VerifyContext);
  const [bool, setBool] = useState(false);

  const data = [
    { key: "1", value: "Male" },
    { key: "2", value: "Female" },
    { key: "3", value: "Others" },
    { key: "4", value: "Prefer not to say" },
  ];

  const onSelect = (val) => {
    setGender(val);
    setBool(true);
  };

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <View style={styles.progressBar}>
          {!bool && <Bar progress={0.8} />}
          {bool && <Bar progress={1} />}
        </View>
        <Text style={styles.textBody}>Create your Stomble Account</Text>
        <View style={styles.container}>
          <Text style={styles.text}>What is your gender?</Text>
          <SelectList
            setSelected={onSelect}
            label="Select gender"
            data={data}
            save="value"
            inputStyles={{ color: "white" }}
            dropdownTextStyles={{ color: "white" }}
            boxStyles={{ marginTop: 12 }}
          />
        </View>
        <View style={styles.buttonContainer}>
          {!bool && <Button title="CONTINUE" page="genderNotSelected"></Button>}
          {bool && <Button title="PROCEED" page="EnterPassword"></Button>}
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
