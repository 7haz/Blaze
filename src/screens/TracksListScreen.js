import React from "react";
import { Text, StyleSheet } from "react-native";

const TracksListScreen = () => {
  return (
    <>
      <Text style={s.text}> TracksListScreen Component</Text>
    </>
  );
};

const s = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default TracksListScreen;
