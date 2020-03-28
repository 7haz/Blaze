import React, { useEffect } from "react";
import { FlatList } from "react-native-gesture-handler";
import TrackCard from "../components/TrackCard";
import useTrackStore from "../stores/useTrackStore";

const TracksListScreen = ({ navigation }) => {
  const tracks = useTrackStore(st => st.tracks);
  const updateTracksList = useTrackStore(st => st.update);
  useEffect(() => {
    updateTracksList();
  }, []);
  return (
    <>
      <FlatList
        data={tracks}
        renderItem={({ item }) => (
          <TrackCard
            {...item}
            onPress={() => navigation.navigate("Show", { id: item.id })}
          />
        )}
        keyExtractor={track => track.id}
      />
    </>
  );
};

export default TracksListScreen;
