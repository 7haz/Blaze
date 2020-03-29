import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from "react-native";

import useLocationStore from "../stores/useLocationStore";
import DashTimeEntry from "./DashTimeEntry";
import DashDistanceEntry from "./DashDistanceEntry";
import DashSpeedEntry from "./DashSpeedEntry";
import StopButton from "./StopButton";
import useSaveTrack from "../hooks/useSaveTrack";

const RecordingDash = () => {
  const currentLocation = useLocationStore(st => st.currentLocation);
  const [showInput, setShowInput] = useState(false);
  const [trackName, setTrackName] = useState("");

  const totalDistance = useLocationStore(st => st.totalDistance);

  const [handleStop] = useSaveTrack();

  if (showInput) {
    return (
      <View style={s.formContainer}>
        <TextInput
          autoCorrect={false}
          style={s.input}
          placeholder="Enter Track Name"
          value={trackName}
          onChangeText={setTrackName}
        />
        <TouchableOpacity onPress={() => handleStop(trackName)}>
          <Text style={s.saveButtonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <>
        <View style={s.dashContainer}>
          <DashTimeEntry currentTime={currentLocation.timestamp} />
          <DashDistanceEntry distance={totalDistance} />
          <DashSpeedEntry speed={currentLocation.speed} />
        </View>
        <View style={s.buttonsContainer}>
          <View style={s.buttonsContainer}>
            {/* <PauseButton /> */}
            <StopButton onPress={() => setShowInput(true)} />
          </View>
        </View>
      </>
    );
  }
};

const s = StyleSheet.create({
  input: {
    margin: 10,
    fontSize: 20,
    borderBottomColor: "rgba(70,70,70,0.5)",
    borderBottomWidth: 1
  },
  dashContainer: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  entryContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  entry: {
    padding: 15,
    fontSize: 25
  },
  // formContainer: {},
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center"
  },
  saveButtonText: {
    color: "#ea4c89",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
    padding: 20
  }
});

export default RecordingDash;
