import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import MapView, { Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import useLocationStore from "../stores/useLocationStore";
import LightMapStyle from "../../assets/mapStyles/silverMapStyle";
import DarkMapStyle from "../../assets/mapStyles/darkMapStyle";
// import { LinearGradient } from "expo-linear-gradient";

const Map = ({ isFocused }) => {
  const isRecording = useLocationStore(st => st.isRecording);
  const currentLocation = useLocationStore(st => st.currentLocation);
  const currentTrack = useLocationStore(st => st.currentTrack);
  const updateLocation = useLocationStore(st => st.updateLocation);

  // when user clicks the track, the map will contain the track
  // when user clicks on the "myllocation" button the map will follow the user hense : followsUserLocation={true} => Opps :( -> IOS Only

  return (
    <MapView
      showsUserLocation={isFocused || isRecording}
      onUserLocationChange={({ nativeEvent }) =>
        updateLocation(nativeEvent.coordinate)
      }
      showsTraffic={false}
      zoomTapEnabled={false}
      zoomControlEnabled={false}
      toolbarEnabled={false}
      customMapStyle={LightMapStyle}
      provider={PROVIDER_GOOGLE}
      style={s.map}
      // initialRegion={{
      //   ...currentLocation,
      //   latitudeDelta: 0.05,
      //   longitudeDelta: 0.05
      // }}
      region={
        currentLocation
          ? {
              ...currentLocation,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005
            }
          : undefined
      }
    >
      <Polyline
        coordinates={currentTrack}
        strokeColor="#ea4c89"
        strokeWidth={6}
      />
    </MapView>
  );
};

const s = StyleSheet.create({
  map: {
    // width: Dimensions.get("window").width,
    height: 600
  },
  mask: {
    backgroundColor: "black",
    opacity: 0.4,
    flex: 1
  },
  errorCard: {
    padding: 20,
    alignSelf: "center",
    marginTop: 70,
    borderRadius: 10,
    height: 70,
    width: 350,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  text: {
    color: "red",
    alignSelf: "center",
    fontSize: 15,
    zIndex: 10
  }
});

export default Map;
