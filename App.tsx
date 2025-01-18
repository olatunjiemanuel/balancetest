import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "./components/ButtonComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Test commit</Text>
      <ButtonComponent onPress={() => {}} buttonName="new button" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 25,
  },
});
