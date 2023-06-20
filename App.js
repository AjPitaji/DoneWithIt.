import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImage from "./app/screen/ViewImage";
import { Button, StatusBar } from "react-native";
import CustomButton from "./app/components/CustomButton";
import Card from "./app/components/Card";
import ListingDetail from "./app/screen/ListingDetail";
import { View } from "react-native";
export default function App() {
  return (
    <View>
      <StatusBar hidden={true} />
      <ListingDetail />
    </View>
  );
}
