import { View, Text, Image, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import colors from "./Colors";
const Placeholders = () => {
  return (
    <View style={styles.placeholders}>
      <CustomButton title="login" color={colors.primary} />
      <CustomButton title="Register" color={colors.secondary} />
    </View>
  );
};

const styles = StyleSheet.create({
  placeholders: {
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 20,
    bottom: 10,
  },
});

export default Placeholders;
