import React from "react";
import { Text, StyleSheet } from "react-native";

const TrackShowScreen = () => {
  return (
    <>
      <Text style={s.text}> TrackShowScreen Component</Text>
    </>
  );
};

const s = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TrackShowScreen;
