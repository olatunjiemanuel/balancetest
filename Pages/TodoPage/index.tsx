import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const TodoPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View>
      <Text>TodoPage</Text>
      <TouchableOpacity
        style={styles.testButton}
        onPress={() => navigation.popTo("Login")}
      >
        <Text style={{ color: "#fff" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  testButton: {
    backgroundColor: "blue",
    width: 150,
    padding: 10,
  },
});
