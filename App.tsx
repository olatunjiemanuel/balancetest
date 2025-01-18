import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Pages import
import LoginPage from "./Pages/LoginPage";
import TodoPage from "./Pages/TodoPage";
import SignUpPage from "./Pages/SignUpPage";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Login",
  screens: {
    Login: LoginPage,
    Todos: TodoPage,
    SignUp: SignUpPage,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
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
