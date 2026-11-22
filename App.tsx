import React, { useEffect, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Logo from "./assets/logo.png";
import CardView from "./src/components/CardView";

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.appContainer}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1E1F22"
        translucent={false}
      />
      {isSplashVisible ? (
        <View style={styles.splashContainer}>
          <Image
            source={Logo}
            style={styles.splashLogo}
            resizeMode="contain"
          />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <CardView />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1E1F22",
  },
  splashContainer: {
    flex: 1,
    backgroundColor: "#1E1F22",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  splashLogo: {
    width: "75%",
    height: 180,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 24,
  },
});