import React from "react";
import { View, ScrollView, StatusBar } from "react-native";
import Card from "../components/Card";

function ListingDetail(props) {
  return (
    <ScrollView>
      <StatusBar hidden={true} />
      <View style={{ width: "100%", backgroundColor: "#FBF8F1" }}>
        <View style={{ flex: 1 }}>
          <Card
            image={require("../../assets/red-jacket.jpg")}
            title="Red Jacket"
            subtitle="$100"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Card
            image={require("../../assets/red-jacket.jpg")}
            title="Red Jacket"
            subtitle="$100"
          />
        </View>

        <View style={{ flex: 1 }}>
          <Card
            image={require("../../assets/red-jacket.jpg")}
            title="Red Jacket"
            subtitle="$100"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Card
            image={require("../../assets/red-jacket.jpg")}
            title="Red Jacket"
            subtitle="$100"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Card
            image={require("../../assets/red-jacket.jpg")}
            title="Red Jacket"
            subtitle="$100"
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default ListingDetail;
