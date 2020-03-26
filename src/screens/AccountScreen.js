import React from "react";
import { Text, StyleSheet } from "react-native";

const AccountScreen = () => {
  return (
    <>
      <Text style={s.text}> AccountScreen Component</Text>
    </>
  );
};

const s = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default AccountScreen;
