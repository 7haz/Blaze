import React from "react";
import { StyleSheet } from "react-native";
import RecordingDash from "./RecordingDash";
import useLocationStore from "../stores/useLocationStore";
import StartReccordingButton from "../screens/StartRecordingButton";

const NewTrackForm = () => {
  const isRecording = useLocationStore(st => st.isRecording);
  const startRecording = useLocationStore(st => st.startRecording);

  if (isRecording) {
    return <RecordingDash />;
  } else {
    return <StartReccordingButton onPress={startRecording} />;
  }
};

const s = StyleSheet.create({
  button: {}
});

export default NewTrackForm;
