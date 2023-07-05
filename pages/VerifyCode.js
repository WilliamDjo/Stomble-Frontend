import React, { useEffect, useContext } from "react";
import { VerifyContext } from "../components/ValueContext";

import { View, Text, StyleSheet, Pressable, Animated } from "react-native";
import NetInfo from "@react-native-community/netinfo";

import Button from "../components/Button";

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const { Value, Text: AnimatedText } = Animated;
const CELL_COUNT = 6;
const CELL_SIZE = 55;
const CELL_BORDER_RADIUS = 8;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));

const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

export default function VerifyCode() {
  const [ipAddress, setIpAddress] = React.useState("");
  NetInfo.fetch().then((state) => {
    setIpAddress(state.details.ipAddress);
  });
  const [value, setValue] = React.useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const { phoneNumber, setPhoneNumber } = useContext(VerifyContext);
  const [countdown, setCountdown] = React.useState(60); // Initial countdown value of 60 seconds
  const [timerEnded, setTimerEnded] = React.useState(false);
  const { fullName, password, gender, birthDate } = useContext(VerifyContext);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(timer);
      setTimerEnded(true);
    }

    return () => clearInterval(timer);
  }, [countdown]);

  const maskedPhoneNumber =
    phoneNumber.substring(0, 3) +
    "******" +
    phoneNumber.substring(phoneNumber.length - 3);

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);

    const animatedCellStyle = {};

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  // Resend Code OnPress
  const onPress = () => {
    fetch("http://" + ipAddress + ":2000/verify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phoneNumber: phoneNumber,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          setTimerEnded(false);
          setCountdown(60);
        } else {
          alert("Error", "Could not sign up");
          console.log(json);
          console.log("hello");
        }
      })
      .catch((e) => {
        alert("Error", "Could not sign up");
        console.log(e);
      });
  };
  return (
    <View style={styles.root}>
      <View style={styles.body}>
        <View style={styles.container}>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={renderCell}
          />
          <View style={styles.inputContainer}>
            <Text style={styles.text}>Enter the 6 digit code sent to</Text>
            <Text style={styles.text}>{maskedPhoneNumber}</Text>
          </View>
          <View style={styles.inputContainer}>
            {timerEnded ? (
              <Pressable onPress={onPress}>
                <Text style={styles.countdownText}>Resend Code</Text>
              </Pressable>
            ) : (
              <Text style={styles.text}>
                Resend code in {countdown} seconds
              </Text>
            )}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="VERIFY CODE"
            page="verifyCode"
            phoneNumber={phoneNumber}
            fullName={fullName}
            password={password}
            gender={gender}
            birthDate={birthDate}
            code={value}
          ></Button>
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
    marginBottom: 40,
  },
  textBody: {
    color: "white",
    textAlign: "left",
    fontSize: 15,
    fontFamily: "DM-Sans",
  },
  text: {
    color: "white",
  },
  countdownText: {
    color: "white",
    fontWeight: "900",
  },
  input: {
    color: "white",

    padding: 10,

    width: "90%",
  },
  container: {
    flex: 5,
  },
  inputContainer: {
    marginTop: 20,

    width: "100%",
    borderRadius: 8,

    alignItems: "center",
    borderWidth: 1,
  },
  codeFiledRoot: {
    height: CELL_SIZE,
    marginTop: 30,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  cell: {
    marginHorizontal: 8,
    height: CELL_SIZE,
    width: 40,
    lineHeight: CELL_SIZE - 5,
    fontSize: 30,
    textAlign: "center",
    borderRadius: CELL_BORDER_RADIUS,
    color: "white",
    backgroundColor: "#00004d",
    borderColor: "white",

    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 2.22,
  },

  buttonContainer: {
    flex: 1,
    marginTop: 100,
  },
});
