import React from "react";
import { View, StyleSheet } from "react-native";

const Spacer = props => <View style={s.spacer}>{props.children}</View>;

const s = StyleSheet.create({
  spacer: { margin: 15 }
});

export default Spacer;
