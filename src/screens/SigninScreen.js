import React from "react";
import { Text, StyleSheet } from "react-native";

const SigninScreen = () => {
  return (
    <>
      <Text style={s.text}> SigninScreen Component</Text>
    </>
  );
};

const s = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SigninScreen;
