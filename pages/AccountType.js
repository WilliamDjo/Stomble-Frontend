import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NativeBaseProvider, Radio } from "native-base";
import Button from "../components/Button";

export default function AccountType() {
  const Example = () => {
    const [value, setValue] = React.useState("business");
    return (
      <Radio.Group
        name="myRadioGroup"
        accessibilityLabel="choose account type"
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
      >
        {/* Business Account View */}
        <View style={styles.accountContainer}>
          <Text style={[styles.accountTitle, styles.text]}>
            Business Account
          </Text>
          <Text style={[styles.accountDescription, styles.text]}>
            Choose this option if you are registering as a business user.
          </Text>
          <View style={styles.radioContainer}>
            <Radio value="business" my={1} />
          </View>
        </View>
        {/* Personal Account View */}
        <View style={styles.accountContainer}>
          <Text style={[styles.accountTitle, styles.text]}>
            Personal Account
          </Text>
          <Text style={[styles.accountDescription, styles.text]}>
            Choose this option if you are registering as an individual user.
          </Text>
          <View style={styles.radioContainer}>
            <Radio value="personal" my={1} />
          </View>
        </View>
      </Radio.Group>
    );
  };

  return (
    <NativeBaseProvider>
      <View style={styles.root}>
        <View style={styles.textContainer}>
          <Text style={styles.textHeading}>Create your Stomble Account</Text>
        </View>

        <View style={styles.body}>
          <Example />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="SIGN UP" page="SaveLoginInfo" />
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
  body: {
    flex: 3,
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "5%",
  },
  textContainer: {
    width: "90%",
    marginHorizontal: "5%",
    marginTop: 20,
  },
  textHeading: {
    color: "white",
    textAlign: "left",
    fontSize: 18,
    fontFamily: "DM-Sans",
  },
  buttonContainer: {
    flex: 1,
    marginTop: 100,
  },
  accountContainer: {
    width: "100%",
    padding: 20,
    marginBottom: 20,
    backgroundColor: "transparent",
    borderRadius: 10,
    position: "relative",
    borderWidth: 1,
    borderColor: "#A0A0A0",
  },
  accountTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  accountDescription: {
    fontSize: 16,
    marginBottom: 20,
  },
  radioContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 20,
    // height: 20,
    borderRadius: 10,
    // backgroundColor: "blue", // Change this to the color you want for the radio button
  },
  text: {
    color: "white",
  },
});
