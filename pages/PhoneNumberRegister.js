import React, { useRef, useContext } from "react";

import { View, Text, StyleSheet, Pressable } from "react-native";

import PhoneInput from "react-native-phone-input";
import Button from "../components/Button";

import { VerifyContext } from "../components/ValueContext";

export default function PhoneNumberRegister(props) {
  const { phoneNumber, setPhoneNumber } = useContext(VerifyContext);
  const [phoneNumberEntered, setPhoneNumberEntered] = React.useState(false);

  const phone = useRef();
  //onPress To Navigate
  const onPress = () => {
    props.navigation.navigate("Home");
  };

  const onPhoneEntered = (num) => {
    setPhoneNumber(num);
    setPhoneNumberEntered(true);
  };

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <Text style={styles.textBody}>
          Verify your mobile number to get started
        </Text>
        <View style={styles.container}>
          <Text style={styles.text}>Mobile Number</Text>
          <PhoneInput
            initialCountry={"au"}
            textProps={{
              placeholder: "Enter a mobile number...",
            }}
            textStyle={styles.phoneInput}
            flagStyle={styles.flagStyle}
            ref={phone}
            style={styles.customStyle}
            onChangePhoneNumber={onPhoneEntered}
          />
        </View>
        <View style={styles.buttonContainer}>
          {!phoneNumberEntered && (
            <Button title="CONTINUE" page="phoneNumberNotEntered"></Button>
          )}
          {phoneNumberEntered && (
            <Button title="CONTINUE" page="NameRegister"></Button>
          )}

          <View style={styles.regContainer}>
            <Text style={styles.text}>Already have an account?</Text>

            <Pressable>
              <Text style={styles.regButtonText} onPress={onPress}>
                Log In
              </Text>
            </Pressable>
          </View>
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
  textBody: {
    color: "white",
    textAlign: "left",
    fontSize: 15,
    fontFamily: "DM-Sans",
    paddingTop: 30,
  },
  text: {
    color: "white",
  },
  container: {
    paddingTop: 30,
    flex: 3,
  },
  phoneInput: {
    color: "white",
    fontSize: 25,
  },
  customStyle: {
    paddingTop: 20,
    borderColor: "white",
  },
  flagStyle: {
    width: 50,
    height: 30,
  },
  buttonContainer: {
    flex: 1,
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
    color: "#3366ff",
  },
});
