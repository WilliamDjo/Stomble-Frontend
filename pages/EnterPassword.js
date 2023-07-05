import React, { useContext } from "react";
import { View, Text, StyleSheet, Pressable, TextInput } from "react-native";
import errorIcon from "../assets/cross.png";
import successIcon from "../assets/checkmark.png";
import Button from "../components/Button";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useTogglePasswordVisibility } from "../components/useTogglePasswordVisibility";
import { useToggleConfirmPasswordVisibility } from "../components/useToggleConfirmPasswordVisibility";
import PasswordValidate, {
  VALIDATION_RULES_KEYS,
} from "react-native-password-validate-checklist";
import { VerifyContext } from "../components/ValueContext";

export default function EnterPassword() {
  const { password, setPassword } = useContext(VerifyContext);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
  const {
    confirmPasswordVisibility,
    rightIcon2,
    handleConfirmPasswordVisibility,
  } = useToggleConfirmPasswordVisibility();

  const [password2, setPassword2] = React.useState("");
  const [validated, setValidated] = React.useState(false);
  const { fullName, phoneNumber, gender, birthDate } =
    useContext(VerifyContext);

  const rules = [
    {
      key: VALIDATION_RULES_KEYS.MIN_LENGTH,
      ruleValue: 9,
      label: "Should contain more than 8 characters",
    },

    { key: VALIDATION_RULES_KEYS.LOWERCASE_LETTER },
    { key: VALIDATION_RULES_KEYS.UPPERCASE_LETTER },
    { key: VALIDATION_RULES_KEYS.NUMERIC },
    { key: VALIDATION_RULES_KEYS.SPECIAL_CHARS },
    { key: VALIDATION_RULES_KEYS.PASSWORDS_MATCH },
  ];
  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <Text style={styles.textBody}>Set up your password</Text>
        <View style={styles.container}>
          <Text style={styles.text}>New Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              isPassword={true}
              secureTextEntry={passwordVisibility}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter password"
            />
            <Pressable
              onPress={handlePasswordVisibility}
              style={styles.iconContainer}
            >
              <MaterialCommunityIcons
                name={rightIcon}
                size={22}
                color="white"
              />
            </Pressable>
          </View>
          <PasswordValidate
            newPassword={password}
            confirmPassword={password2}
            validationRules={rules}
            onPasswordValidateChange={(status) => setValidated(status)}
            labelStyle={{ color: "white" }}
            iconSuccessSource={successIcon}
            iconErrorSource={errorIcon}
          />
          <Text style={styles.text}>Confirm New Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={setPassword2}
              value={password2}
              isPassword={true}
              secureTextEntry={confirmPasswordVisibility}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Enter password"
            />
            <Pressable
              onPress={handleConfirmPasswordVisibility}
              style={styles.iconContainer}
            >
              <MaterialCommunityIcons
                name={rightIcon2}
                size={22}
                color="white"
              />
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {!validated && (
            <Button
              title="SEND CODE"
              page="passwordNotSet"
              color="#404040"
            ></Button>
          )}
          {validated && (
            <Button
              title="SEND CODE"
              page="addUserToBackEnd"
              number={phoneNumber}
            ></Button>
          )}
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
    marginTop: 20,
  },
  text: {
    color: "white",
  },
  input: {
    color: "white",
    padding: 10,
    width: "90%",
  },
  container: {
    paddingTop: 30,
    flex: 3,
  },
  inputContainer: {
    marginTop: 10,
    backgroundColor: "transparent",
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#d7d7d7",
  },

  buttonContainer: {
    flex: 1,
    marginTop: 100,
  },
});
