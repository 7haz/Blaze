// const MS = [
//   "Jan",
//   "Feb",
//   "Mar",
//   "Apr",
//   "May",
//   "June",
//   "July",
//   "Aug",
//   "Sept",
//   "Oct",
//   "Nov",
//   "Dec"
// ];

export const getTimeDifference = (d1, d2) => {
  let date1 = new Date(d1);
  let date2 = new Date(d2);
  let difference = date1.getTime() - date2.getTime();
  let daysDifference = Math.floor(difference / 1000 / 60 / 60 / 24);
  difference -= daysDifference * 1000 * 60 * 60 * 24;
  let hoursDifference = Math.floor(difference / 1000 / 60 / 60);
  difference -= hoursDifference * 1000 * 60 * 60;
  let minutesDifference = Math.floor(difference / 1000 / 60);
  difference -= minutesDifference * 1000 * 60;
  let secondsDifference = Math.floor(difference / 1000);

  return {
    d: daysDifference,
    h: hoursDifference,
    m: minutesDifference,
    s: secondsDifference
  };
};

export const getTimeDifferenceString = (d1, d2) => {
  const obj = getTimeDifference(d1, d2);
  return obj.h + ":" + obj.m + ":" + obj.s;
};

export const getDistanceString = distance => {
  if (distance < 1) {
    return "0." + Math.round(distance * 10);
  } else {
    const value = String(distance).split(".");
    const int = value[0];
    const dec = value[1];
    if (dec) {
      return int + "." + dec[0];
    } else {
      return int;
    }
  }
};

export const getDateString = timestamp => {
  if (timestamp) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date = new Date(timestamp);
    return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
  } else {
    return "--";
  }
};

export const getTimeDifferenceInSeconds = (d1, d2) => {
  const t1 = new Date(d1);
  const t2 = new Date(d2);
  return (t1.getTime() - t2.getTime()) / 1000;
};

export const getTrackDistanceInKm = points => {
  let totalDistance = 0;
  for (let i = 0; i < points.length - 1; i++)
    totalDistance += getDistance(points[i], points[i + 1]);
  return totalDistance;
};

export const getDistance = (p1, p2) => {
  const lat1 = p1.latitude;
  const lon1 = p1.longitude;
  const lat2 = p2.latitude;
  const lon2 = p2.longitude;

  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1); // deg2rad below
  let dLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distance in km
  return d;
};

const deg2rad = deg => deg * (Math.PI / 180);

export const getElvGain = locations => {
  let totalGain = 0;
  for (let i = 0; i < locations.length - 1; i++) {
    const gain = locations[i + 1].altitude - locations[i].altitude;
    if (gain > 0) {
      totalGain += gain;
    }
  }
  return totalGain / 1000; // I assume the unit is in millmeter !?
};

export const getPointSorroundingSquare = (point, distance) => {
  // return four points sorrounds the give point on each direction
  // + +
  const p1 = {
    latitude: point.latitude + distance,
    longitude: point.longitude + distance
  };
  // + -
  const p2 = {
    latitude: point.latitude + distance,
    longitude: point.longitude - distance
  };
  // - -
  const p3 = {
    latitude: point.latitude - distance,
    longitude: point.longitude - distance
  };
  // - +
  const p4 = {
    latitude: point.latitude - distance,
    longitude: point.longitude + distance
  };

  return [p1, p2, p3, p4];
};

export const getRandomId = () =>
  String(Math.random() + Math.random() - Math.random());
