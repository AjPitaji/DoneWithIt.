import { View, Text, Image, StyleSheet, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
const Heading = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.Text
      style={[
        styles.doneWithItText,
        {
          opacity: fadeAnim,
        },
      ]}
    >
      DoneWithIt.
    </Animated.Text>
  );
};

const styles = StyleSheet.create({
  doneWithItText: {
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    color: "tomato",
    bottom: "30%",
  },
});

export default Heading;
