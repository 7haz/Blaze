import { useState, useEffect } from "react";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
// import "../_mockLocation";

export default useLocation = (shouldWatch, callback) => {
  const [err, setErr] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    try {
      await requestPermissionsAsync();
      const watchOptions = {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      };
      const sub = await watchPositionAsync(watchOptions, callback);
      setSubscriber(sub);
    } catch (e) {
      setErr(e);
    }
  };

  useEffect(() => {
    if (shouldWatch) {
      console.log("watching started");
      startWatching();
    } else {
      console.log("Watching stopped");
      subscriber.remove();
      setSubscriber(null);
    }

    return () => {
      console.log("Destrcuting Tracks Screen .. ");
      if (subscriber) {
        console.log("Watching stopped");
        subscriber.remove();
      }
    };
  }, [shouldWatch]);

  return [err];
};
