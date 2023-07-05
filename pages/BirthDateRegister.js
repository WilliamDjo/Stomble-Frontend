import React, { useState, useContext } from "react";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Button from "../components/Button";
import Bar from "../components/Bar";

import DateTimePicker from "@react-native-community/datetimepicker";
import { VerifyContext } from "../components/ValueContext";

export default function BirthDateRegister() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const { birthDate, setBirthDate } = useContext(VerifyContext);

  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
    } else {
      toggleDatePicker();
    }
  };

  const confirmDate = () => {
    setBirthDate(date.toDateString());
    toggleDatePicker();
  };

  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <View style={styles.progressBar}>
          <Bar progress={0.6} />
        </View>
        <Text style={styles.textBody}>Create your Stomble Account</Text>
        <View style={styles.container}>
          <Text style={styles.text}>What is your date of birth?</Text>
          {showPicker && (
            <DateTimePicker
              mode="date"
              display="spinner"
              value={date}
              onChange={onChange}
              style={styles.datePicker}
              textColor="white"
              maximumDate={new Date(2005, 1, 1)}
              minimumDate={new Date()}
            />
          )}

          {showPicker && (
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <TouchableOpacity
                style={[
                  styles.button,
                  styles.pickerButton,
                  { backgroundColor: "#11182711" },
                ]}
                onPress={toggleDatePicker}
              >
                <Text style={([styles.buttonText], { color: "grey" })}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.pickerButton]}
                onPress={confirmDate}
              >
                <Text style={[styles.buttonText]}>Confirm</Text>
              </TouchableOpacity>
            </View>
          )}
          <TextInput
            style={styles.input}
            onChangeText={setBirthDate}
            value={birthDate}
            placeholder="Sat Aug 21 2001"
            placeholderTextColor="#d0d0e1"
            editable={false}
            onPressIn={toggleDatePicker}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="CONTINUE" page="GenderRegister"></Button>
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
  datePicker: {
    height: 120,
    marginTop: -10,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 15,
    backgroundColor: "grey",
  },
  container: {
    paddingTop: 30,
    flex: 3,
  },
  buttonContainer: {
    flex: 1,
    marginTop: 100,
  },
  pickerButton: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "white",
  },
});
