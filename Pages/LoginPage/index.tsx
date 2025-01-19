import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthForm from "../../components/AuthForm";
import ButtonComponent from "../../components/ButtonComponent";

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.container}>
      <AuthForm
        onPressAuth={() => navigation.replace("Todos")}
        AuthButtonTitle="Login"
      />
      <View style={styles.singBtnUpCtnr}>
        <ButtonComponent
          buttonName="Sign Up"
          onPress={() => navigation.replace("Todos")}
        />
      </View>
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  singBtnUpCtnr: {
    marginTop: 20,
  },
});
