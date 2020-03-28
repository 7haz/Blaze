import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getDistanceString } from "../helpers";

const DashDistanceEntry = ({ distance }) => {
  return (
    <View style={s.container}>
      <Text style={s.label}>Distance</Text>
      <View style={s.entryContainer}>
        <Text style={s.entry}>{getDistanceString(distance)}</Text>
        <Text style={s.unit}>km</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    // do something
  },
  label: {
    opacity: 0.7
  },
  entryContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  entry: {
    fontSize: 65
  },
  unit: {
    paddingLeft: 2,
    paddingBottom: 10,
    fontSize: 20,
    opacity: 0.7
  }
});

export default DashDistanceEntry;
