import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Logo from "../components/logo";
import Heading from "../components/Heading";
import Placeholders from "../components/PlaceHolders";

function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/background.jpg")}
      style={styles.imageBackground}
    >
      <Logo />
      <Heading />

      <Placeholders />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
export default WelcomeScreen;
