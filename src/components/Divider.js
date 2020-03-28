import React from "react";
import { View, StyleSheet } from "react-native";

const Divider = () => {
  return <View style={s.divider} />;
};

const s = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: "grey",
    height: 25,
    width: 1,
    alignSelf: "center",
    opacity: 0.4
  }
});

export default Divider;
