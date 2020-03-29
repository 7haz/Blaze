import React from "react";
import { Text, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";
import Spacer from "./Spacer";

const ElevationChart = ({ locations }) => {
  const data = locations
    .map(i => Math.round(i.altitude))
    .filter((p, i) => i % 2 === 0);

  return (
    <>
      <Spacer>
        <Text style={s.header}>Elevation</Text>
      </Spacer>
      <LineChart
        style={s.container}
        data={{
          datasets: [{ data }]
        }}
        // width={Dimensions.get("window").width - 30}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "rgba(255, 255, 255,0)",
          backgroundGradientFrom: "#fff",
          backgroundGradientTo: "#fff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(230, 0, 20, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(55, 55, 55, ${opacity})`,
          propsForDots: {
            r: "0"
          }
        }}
      />
    </>
  );
};

const s = StyleSheet.create({
  header: {
    fontSize: 20,
    marginLeft: 12,
    marginBottom: 5,
    color: "#ea4c89"
  },
  container: {
    // padding: 10,
    // marginHorizontal: 8
    // alignSelf: "center"
  }
});

export default ElevationChart;
