import React from "react";
import { Image, View, Text } from "react-native";

function Card(props) {
  return (
    <View
      style={{
        margin: 30,
        backgroundColor: "white",

        height: "30%",
        borderRadius: 25,
      }}
    >
      <Image
        source={props.image}
        style={{
          height: 300,
          width: "100%",
          borderRadius: 25,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          elevated: 2,
        }}
      />
      <Text style={{ left: 14, top: 14, fontWeight: "bold" }}>
        {props.title}
      </Text>
      <Text style={{ top: 28, left: 14, color: "darkgreen" }}>
        {props.subtitle}
      </Text>
    </View>
  );
}

export default Card;
