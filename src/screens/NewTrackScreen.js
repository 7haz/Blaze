import React from "react";
import { View, StyleSheet } from "react-native";
import Map from "../components/Map";
import NewTrackForm from "../components/NewTrackForm";
import Spacer from "../components/Spacer";
import RecordingIndicator from "../components/RecordingIndicator";
import { withNavigationFocus } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";

const NewTrackScreen = ({ isFocused }) => {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <LinearGradient
          colors={["#fff", "rgba(255,255,255,0.0)"]}
          // end={[0.5, 0.5]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            height: 100,
            marginTop: 30
          }}
        />
        <RecordingIndicator />
      </View>
      <View style={s.mapContainer}>
        <Map isFocused={isFocused} />
      </View>
      <View style={s.btnContainer}>
        <Spacer>
          <NewTrackForm />
        </Spacer>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  header: {
    height: 100,
    zIndex: 5,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 20
  },
  container: {
    // flex: 1
  },
  mapContainer: {
    marginTop: -70
  },
  btnContainer: {
    backgroundColor: "#fff",
    borderRadius: 30,
    marginTop: -55
  }
});

export default withNavigationFocus(NewTrackScreen);
