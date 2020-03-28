import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useLocationStore from "../stores/useLocationStore";
import { getTimeDifference } from "../helpers";

const DashTimeEntry = ({ currentTime }) => {
  const firstLocation = useLocationStore(st => st.currentTrack)[0];
  const initialTime = firstLocation ? firstLocation.timestamp : 0;
  const t = getTimeDifference(currentTime, initialTime);
  return (
    <View style={s.container}>
      <Text style={s.label}>Time Elapsed</Text>
      <View style={s.entryContainer}>
        {t.h == "0" ? (
          <>
            <Text style={s.entry}>{t.m}</Text>
            <Text style={s.unit}>m</Text>
            <Text style={{ ...s.entry, marginLeft: 10 }}>{t.s}</Text>
            <Text style={s.unit}>s</Text>
          </>
        ) : (
          <>
            <Text style={s.entry}>{t.h}</Text>
            <Text style={s.unit}>h</Text>
            <Text style={{ ...s.entry, marginLeft: 10 }}>{t.m}</Text>
            <Text style={s.unit}>m</Text>
          </>
        )}
      </View>
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
    paddingBottom: 6,
    fontSize: 20,
    opacity: 0.7
  },
  text: {
    fontSize: 30
  }
});

export default DashTimeEntry;
