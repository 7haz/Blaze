import { create } from "zustand";
import { AsyncStorage } from "react-native";

const [useTrackStore] = create(set => ({
  tracks: [],
  update: async () =>
    set({ tracks: JSON.parse(await AsyncStorage.getItem("tracks")) }),
  addTrack: newTrack => {
    set(st => {
      const tracks = [...st.tracks, newTrack];
      AsyncStorage.setItem("tracks", JSON.stringify(tracks));
      return { tracks };
    });
  },
  removeTrack: trackId => {
    console.log("Track cannot be removed yet");
  }
}));

export default useTrackStore;
