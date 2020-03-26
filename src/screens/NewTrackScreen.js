import React from "react";
import { Text, StyleSheet } from "react-native";

const NewTrackScreen = () => {
  return (
    <>
      <Text style={s.text}> NewTrackScreen Component</Text>
    </>
  );
};

const s = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default NewTrackScreen;
