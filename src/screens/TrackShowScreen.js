import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CardSimpleMap from "../components/CardSimpleMap";
import SpeedChart from "../components/SpeedChart";
import { ScrollView } from "react-native-gesture-handler";
import ElevationChart from "../components/ElevationChart";
import TrackNumbersCard from "../components/TrackNumbersCard";
import { getElvGain } from "../helpers";
import useTrackStore from "../stores/useTrackStore";

const TrackShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const track = useTrackStore(st => st.tracks).find(i => i.id === id);

  return (
    <ScrollView style={s.container}>
      <View style={s.header}>
        <Text style={s.trackName}> {track.name} </Text>
        <Text style={s.date}> {track.date} </Text>
      </View>
      <CardSimpleMap locations={track.locations} />
      <View style={s.content}>
        <TrackNumbersCard
          duration={track.duration}
          avgSpeed={track.avgSpeed}
          distance={track.distance}
          elvGain={Math.round(getElvGain(track.locations))}
        />

        <SpeedChart locations={track.locations} />
        <ElevationChart locations={track.locations} />
      </View>
    </ScrollView>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    padding: 10
  },
  content: {
    backgroundColor: "#fff",
    marginTop: -40
  },
  trackName: {
    fontSize: 25,
    fontWeight: "bold"
  },
  date: {
    opacity: 0.7,
    color: "grey"
  },
  divider: {
    height: 1,
    backgroundColor: "grey",
    opacity: 0.5,
    marginVertical: 10
  }
});

export default TrackShowScreen;
