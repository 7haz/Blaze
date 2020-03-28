import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useLocationStore from "../stores/useLocationStore";

const RecordingIndicator = () => {
  const isRecording = useLocationStore(st => st.isRecording);
  const [show, setShow] = useState(true);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    const t = setInterval(() => setShow(st => !st), 900);
    setTimer(t);
    return () => {
      if (timer) clearInterval(timer);
    };
  }, []);

  if (isRecording) {
    return (
      <View style={s.container}>
        <Text style={s.text}> Recording </Text>
        <View style={show ? s.showIndicator : s.dontShowIdicator} />
      </View>
    );
  } else {
    return null;
  }
};

const s = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12
  },
  showIndicator: {
    backgroundColor: "red",
    width: 12,
    height: 12,
    borderRadius: 30
  },
  dontShowIdicator: {
    backgroundColor: "red",
    width: 12,
    height: 12,
    borderRadius: 30,
    opacity: 0.2
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    paddingRight: 5
  }
});

export default RecordingIndicator;
