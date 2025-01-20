import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const SignUpPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View>
      <Text>SignUpPage</Text>
      <TouchableOpacity
        style={styles.testButton}
        onPress={() => navigation.replace("Todos")}
      >
        <Text style={{ color: "#fff" }}>SignUp to TodoApp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpPage;

const styles = StyleSheet.create({
  testButton: {
    backgroundColor: "blue",
    width: 150,
    padding: 10,
  },
});
