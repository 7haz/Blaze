import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Polyline, Circle } from "react-native-maps";
import LightMapStyle from "../../assets/mapStyles/silverMapStyle";
import DarkMapStyle from "../../assets/mapStyles/darkMapStyle";
import { getPointSorroundingSquare } from "../helpers";

const CardSimpleMap = ({ locations }) => {
  const mapRef = useRef(null);
  const startPoint = locations[0];
  const finishPoint = locations[locations.length - 1];
  const middlePoint = locations[Math.round(locations.length / 2)];

  return (
    <MapView
      ref={mapRef}
      style={s.map}
      customMapStyle={LightMapStyle}
      provider={PROVIDER_GOOGLE}
      onLayout={() =>
        mapRef.current.fitToCoordinates([
          ...getPointSorroundingSquare(startPoint, 0.003),
          ...getPointSorroundingSquare(finishPoint, 0.003),
          ...getPointSorroundingSquare(middlePoint, 0.003)
        ])
      }
      liteMode={true}
      showsTraffic={false}
      showsIndoors={false}
      zoomEnabled={false}
      zoomTapEnabled={false}
      zoomControlEnabled={false}
      rotateEnabled={false}
      scrollEnabled={false}
      pitchEnabled={false}
      toolbarEnabled={false}
    >
      <Circle
        center={startPoint}
        radius={20}
        strokeWidth={4}
        strokeColor="#ea4c89"
        zIndex={2}
        fillColor="#fff"
      />
      <Polyline coordinates={locations} strokeColor="#ea4c89" strokeWidth={4} />
      <Circle
        center={finishPoint}
        radius={20}
        strokeWidth={4}
        strokeColor="#ea4c89"
        zIndex={2}
        fillColor="#fff"
      />
    </MapView>
  );
};

CardSimpleMap.fitTo;

const s = StyleSheet.create({
  map: {
    height: 250,
    marginVertical: 12
  }
});

export default CardSimpleMap;
