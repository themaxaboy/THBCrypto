import React from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Expo, AppLoading, Asset, Font } from "expo";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import RootNavigation from "./navigation/RootNavigation";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      assetsAreLoaded: false
    };
  }
  async componentWillMount() {
    this._loadAssetsAsync();
  }

  render() {
    if (!this.state.assetsAreLoaded && !this.props.skipLoadingScreen) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
          {Platform.OS === "android" && (
            <View style={styles.statusBarUnderlay} />
          )}
          <HomeScreen />
        </View>
      );
    }
  }

  async _loadAssetsAsync() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    try {
      await Promise.all([
        Asset.loadAsync([require("./assets/images/app-icon.png")]),
        Font.loadAsync([
          // This is the font that we are using for our tab bar
          Ionicons.font
          // We include SpaceMono because we use it in HomeScreen.js. Feel free
          // to remove this if you are not using it in your app
          // { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ])
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        "There was an error caching assets (see: App.js), perhaps due to a " +
          "network timeout, so we skipped caching. Reload the app to try again."
      );
      console.log(e);
    } finally {
      this.setState({ assetsAreLoaded: true });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: "#53bcf3"
  }
});
