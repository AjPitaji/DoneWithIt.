import { View, Image } from "react-native";

function ViewImage(props) {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#fc5c65",
          position: "absolute",
          top: 45,
          left: 30,
        }}
      />
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: "#4ECDC4",
          position: "absolute",
          top: 45,
          right: 30,
        }}
      />
      <Image
        resizeMode="contain"
        source={require("../../assets/chair.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}

export default ViewImage;
