import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TracksListScreen from "./src/screens/TracksListScreen";
import TrackShowScreen from "./src/screens/TrackShowScreen";
import NewTrackScreen from "./src/screens/NewTrackScreen";
import AccountScreen from "./src/screens/AccountScreen";

const authFlow = createStackNavigator({
  Signin: SigninScreen,
  Signup: SignupScreen
});

const appFlow = createBottomTabNavigator({
  Create: NewTrackScreen,
  Tracks: createStackNavigator({
    List: TracksListScreen,
    Show: TrackShowScreen
  }),
  Account: AccountScreen
});

const getAuth = () => {
  const Auth = createAppContainer(authFlow);
  return <Auth />;
};

const getApp = () => {
  const App = createAppContainer(appFlow);
  return <App />;
};
export default () => {
  const isLoggedIn = true;
  return isLoggedIn ? getApp() : getAuth();
};
