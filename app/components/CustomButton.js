import React from "react";
import { TouchableOpacity, Text } from "react-native";
function CustomButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.color,
        width: "80%",
        justifyContent: "center",
        height: 40,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 50,
        margin: 10,
      }}
    >
      <Text style={{ textAlign: "center" }}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
