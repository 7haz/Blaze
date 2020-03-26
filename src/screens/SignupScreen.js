import React from "react";
import { Text, StyleSheet } from "react-native";

const SignupScreen = () => {
  return (
    <>
      <Text style={s.text}> SignupScreen Component</Text>
    </>
  );
};

const s = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SignupScreen;
