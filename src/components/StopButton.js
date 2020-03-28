import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const StopButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={s.container} onPress={onPress}>
      {/* <Text style={s.text}>Stop</Text> */}
      <MaterialIcons style={s.icon} name="stop" />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    width: 100,
    height: 100,
    borderColor: "#ea4c89",
    borderWidth: 5,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    fontSize: 70,
    color: "rgb(70,70,70)"
  }
});

export default StopButton;
