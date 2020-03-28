import { create } from "zustand";
import { getDistance } from "../helpers";

const [useLocationStore] = create((set, get) => ({
  isRecording: false,
  totalDistance: 0,
  currentLocation: null,
  currentTrack: [],
  // pauseRecording: () => set({ isRecording: true }),
  startRecording: () => set({ isRecording: true }),
  stopRecording: () =>
    set({
      isRecording: false,
      totalDistance: 0,
      currentTrack: []
    }),
  updateLocation: newLocation => {
    const { isRecording } = get();
    if (isRecording) {
      set(st => ({
        currentLocation: newLocation,
        currentTrack: [...st.currentTrack, { ...newLocation }],
        totalDistance:
          st.totalDistance + getDistance(st.currentLocation, newLocation)
      }));
    } else {
      set({ currentLocation: newLocation });
    }
  }
}));

export default useLocationStore;
