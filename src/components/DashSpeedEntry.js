import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as Progress from "react-native-progress";

const DashSpeedEntry = ({ speed }) => {
  const getSpeed = () => {
    const str = String(speed).split(".");
    if (str[1] && str[1][0] !== "0") {
      return str[0] + "." + str[1][0];
    } else {
      return str[0];
    }
  };
  return (
    <View style={s.container}>
      <Text style={s.label}>Speed</Text>
      <View style={s.entryContainer}>
        <Text style={s.entry}>{getSpeed()}</Text>
        <Text style={s.unit}>km/h</Text>
      </View>
      <Progress.Bar
        // progress={speed / 100}
        progress={speed / 50}
        width={74}
        borderWidth={0}
        color="#ea4c89"
        unfilledColor="rgba(234,76,137,0.2)"
        style={s.bar}
      />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    justifyContent: "flex-end"
  },
  label: {
    opacity: 0.7
  },
  entryContainer: {
    flexDirection: "row",
    alignItems: "flex-end"
  },
  entry: {
    fontSize: 30
  },
  unit: {
    paddingLeft: 2,
    paddingBottom: 5,
    fontSize: 20,
    opacity: 0.7
  }
  // bar: {
  //   borderRightColor: "rgba(234,76,137,0.5)",
  //   borderRightWidth: 2,
  //   borderTopRightRadius: 0,
  //   borderBottomRightRadius: 0
  // }
});

export default DashSpeedEntry;
