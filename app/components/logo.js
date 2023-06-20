import { View, Text, Image, StyleSheet } from "react-native";

const Logo = () => {
  return (
    <View style={styles.contentContainer}>
      <Image
        style={styles.tinyLogo}
        source={require("../../assets/logo-red.png")}
        resizeMode="contain"
      />
      <Text>Sell What You Don't Need!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: "center",
    top: 100,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default Logo;
