import React from "react";
import RecordingDash from "./RecordingDash";
import useLocationStore from "../stores/useLocationStore";
import StartReccordingButton from "../components/StartRecordingButton";

const NewTrackForm = () => {
  const isRecording = useLocationStore(st => st.isRecording);
  const startRecording = useLocationStore(st => st.startRecording);

  if (isRecording) {
    return <RecordingDash />;
  } else {
    return <StartReccordingButton onPress={startRecording} />;
  }
};

export default NewTrackForm;
