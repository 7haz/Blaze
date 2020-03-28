import useLocationStore from "../stores/useLocationStore";
import useTrackStore from "../stores/useTrackStore";
import { getTimeDifference, getDateString, getRandomId } from "../helpers";

export default () => {
  const currentTrack = useLocationStore(st => st.currentTrack);
  const stopRecording = useLocationStore(st => st.stopRecording);
  const totalDistance = useLocationStore(st => st.totalDistance);

  const addTrack = useTrackStore(st => st.addTrack);

  const handleStop = trackName => {
    if (currentTrack.length < 5) {
      console.log("Track is too short to be saved");
      stopRecording();
    } else {
      const newTrack = {
        date: getDateString(currentTrack[0].timestamp),
        id: getRandomId(),
        name: trackName || "No Name",
        locations: currentTrack,
        duration: getTimeDifference(
          currentTrack[currentTrack.length - 1].timestamp,
          currentTrack[0].timestamp
        ),
        distance: totalDistance,
        avgSpeed:
          currentTrack.reduce((ac, i) => ac + i.speed, 0) / currentTrack.length
      };

      addTrack(newTrack);
      stopRecording();
    }
  };

  return [handleStop];
};
