import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, useRoute } from "@react-navigation/native";
import NetInfo from "@react-native-community/netinfo";

export default function Button(props) {
  const [ipAddress, setIpAddress] = React.useState("");
  NetInfo.fetch().then((state) => {
    // console.log("Connection type", state.type);
    // console.log("Is connected?", state.isConnected);
    // console.log("details", state.details.ipAddress);
    setIpAddress(state.details.ipAddress);
  });
  const navigation = useNavigation();
  //onPress To Navigate
  const onPress = () => {
    if (props.page === "genderNotSelected") {
      // Show error message
      alert("Gender has not been selected");
    } else if (props.page == "phoneNumberNotEntered") {
      alert("Please enter a phone number");
    } else if (props.page == "passwordNotSet") {
      // Show error message
      alert("Password not fully set");
    } else if (props.page == "logIn") {
      alert("User Logged In!");
    } else if (props.page == "addUserToBackEnd") {
      // Navigate to the specified page
      // console.log(props.number);
      fetch("http://" + ipAddress + ":2000/verify", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phoneNumber: props.number,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            navigation.navigate("VerifyCode");
            // console.log("1");
            // navigation.navigate("VerificationForm", { email, phoneNumber, password })
          } else {
            alert("Error", "Could not sign up");
            console.log(json);
            // console.log(props.number);
          }
        })
        .catch((e) => {
          alert("Error", "Could not sign up");
          console.log(e);
          // console.log("http://" + ipAddress + ":2000/verify");
          // console.log("10.249.13.78");
        });
    } else if (props.page == "verifyCode") {
      fetch("http://" + ipAddress + ":2000/register", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: props.fullName,
          phoneNumber: props.phoneNumber,
          password: props.password,
          gender: props.gender,
          birthDate: props.birthDate,
          code: props.code,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            navigation.navigate("AccountType");
          } else {
            alert("Verification Code Wrong", "Could not sign up");
          }
        })
        .catch((e) => {
          alert("Error", "Could not sign up");
        });
    } else if (props.page == "saveLoginInfo") {
      fetch("http://" + ipAddress + ":2000/save-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          saveLogin: true,
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          if (json.success) {
            // Login info saved successfully
            console.log("Login info saved");
            navigation.navigate("End");
          } else {
            // Failed to save login info
            console.log("Failed to save login info");
          }
        })
        .catch((e) => {
          console.log("Error:", e);
        });
    } else {
      // Navigate to the specified page
      navigation.navigate(props.page);
    }
  };
  return (
    <Pressable
      style={[styles.button, { backgroundColor: props.color || "#3366ff" }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
}
// 	 #d0d0e1
const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#3366ff",
    paddingVertical: 15,
    paddingHorizontal: 50, // Adjust this value to make the button narrower
    borderRadius: 6,
    elevation: 3,
    alignItems: "center",
    // justifyContent: "center",
    width: 350, // Adjust this value to make the button narrower
    alignSelf: "center", // Center the button horizontally
  },
  text: {
    color: "white",
  },
});
