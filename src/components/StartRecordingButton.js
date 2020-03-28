import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const StartReccordingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={s.container} onPress={onPress}>
      <Text style={s.text}>START</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderColor: "#ea4c89",
    borderWidth: 5,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgb(70,70,70)"
  }
});

export default StartReccordingButton;
