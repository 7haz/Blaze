import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Divider from "./Divider";

const TrackDetailsLine = ({ distance, duration, avgSpeed }) => {
  const getDistance = () => {
    if (distance < 1) {
      return Math.round(distance * 1000) + " m";
    } else {
      const value = String(distance).split(".");
      const int = value[0];
      const dec = value[1];
      if (dec) {
        return int + "." + dec[0] + " km";
      } else {
        return int + " km";
      }
    }
  };
  return (
    <View style={s.container}>
      <View style={s.entry}>
        <Text styl={s.label}>Time</Text>
        <Text style={s.value}>
          {Math.round(duration.m) + "m " + Math.round(duration.s) + "s"}
        </Text>
      </View>
      <Divider />
      <View style={s.entry}>
        <Text styl={s.label}>Distance</Text>
        {/* <Text style={s.value}>{Math.round(distance) + "km"}</Text> */}
        <Text style={s.value}>{getDistance()}</Text>
      </View>
      <Divider />
      <View style={s.entry}>
        <Text styl={s.label}>Average Speed</Text>
        <Text style={s.value}>{Math.round(avgSpeed) + " km/h"}</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  entry: {},
  label: {},
  value: {
    fontSize: 27
  }
});

export default TrackDetailsLine;
