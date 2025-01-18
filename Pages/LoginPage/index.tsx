import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View>
      <Text>LoginPage</Text>
      <TouchableOpacity
        style={styles.testButton}
        onPress={() => navigation.replace("Todos")}
      >
        <Text style={{ color: "#fff" }}>Login to TodoApp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.testButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={{ color: "#fff" }}>SignUp to TodoApp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  testButton: {
    backgroundColor: "blue",
    width: 150,
    padding: 10,
  },
});
