import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import TrackNumbersCard from "./TrackNumbersCard";
import CardSimpleMap from "./CardSimpleMap";
import { getElvGain } from "../helpers";
import { SimpleLineIcons } from "@expo/vector-icons";

const TrackCard = ({
  name,
  avgSpeed,
  duration,
  distance,
  date,
  locations,
  onPress
}) => {
  const getCalories = () => {
    //  average burned calories for person weighing 72kg at pace of < 10mph roughly = 5.4 cal/minute
    // this can't be further than accurate :)
    const totalMinutes = duration.m + duration.h * 60 + duration.s / 60;
    return Math.round(5.4 * totalMinutes);
  };

  return (
    <View style={s.card}>
      <View style={s.header}>
        <View style={s.nameContainer}>
          <Text style={s.name}>{name}</Text>
          <SimpleLineIcons name="options" style={s.optionsIcon} />
        </View>
        <Text style={s.date}>{date}</Text>
      </View>

      <TrackNumbersCard
        duration={duration}
        avgSpeed={avgSpeed}
        distance={distance}
        elvGain={Math.round(getElvGain(locations))}
      />

      <CardSimpleMap locations={locations} />

      <View style={s.footer}>
        <View style={{ flexDirection: "row" }}>
          <SimpleLineIcons name="fire" style={s.fireIcon} />
          <Text> Calories ≈{getCalories()}</Text>
        </View>
        <TouchableOpacity onPress={onPress}>
          <Text style={s.detailsLink}>View Details > </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  card: {
    marginVertical: 10,
    backgroundColor: "#fff"
    // shadowColor: "grey",
    // shadowOpacity: 0.3
  },
  header: {
    paddingHorizontal: 25,
    paddingVertical: 10
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontWeight: "bold",
    fontSize: 20
  },
  optionsIcon: {
    fontSize: 20,
    paddingTop: 5
  },
  fireIcon: {
    fontSize: 15,
    color: "#ea4c89"
  },
  date: {
    color: "grey"
    // fontWeight: "bold"
  },
  footer: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginTop: -50,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  detailsLink: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ea4c89"
  }
});

export default TrackCard;
