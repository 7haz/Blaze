import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { getDistanceString } from "../helpers";

const TrackNumbersCard = ({ duration, avgSpeed, distance, elvGain }) => {
  const getSpeed = () => {
    const str = String(avgSpeed).split(".");
    if (str[1] && str[1][0] !== "0") {
      return str[0] + "." + str[1][0];
    } else {
      return str[0];
    }
  };

  return (
    <View style={s.container}>
      <View style={s.entryContainer}>
        <Text style={s.label}>Distance</Text>
        <Text style={s.entry}>{getDistanceString(distance)}km</Text>
      </View>
      <View style={s.entryContainer}>
        <Text style={s.label}>Elv Gain</Text>
        <Text style={s.entry}>{elvGain}m</Text>
      </View>
      <View style={s.entryContainer}>
        <Text style={s.label}>Time</Text>
        <View style={{ flexDirection: "row" }}>
          {duration.h == "0" ? (
            <>
              <Text style={s.entry}>{duration.m}m</Text>
              <Text style={s.entry}>{duration.s}s</Text>
            </>
          ) : (
            <>
              <Text style={s.entry}>{duration.h}h</Text>
              <Text style={s.entry}>{duration.m}m</Text>
            </>
          )}
        </View>
      </View>
      <View style={s.entryContainer}>
        <Text style={s.label}>Avg Pace</Text>
        <Text style={s.entry}>{getSpeed()}km/h</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  label: {
    color: "grey"
  },
  entryContainer: {
    // ??
  },
  entry: {
    fontSize: 20
  }
});

export default TrackNumbersCard;
