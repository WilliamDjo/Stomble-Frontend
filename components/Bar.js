import React from "react";
import { ProgressBar, MD3Colors } from "react-native-paper";

export default function Bar(props) {
  return (
    <ProgressBar
      style={{
        height: 10,
      }}
      progress={props.progress}
      theme={{ colors: { primary: "#005ce6" } }}
    />
  );
}
