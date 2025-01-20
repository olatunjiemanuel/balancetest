import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import ButtonComponent from "../ButtonComponent";

interface AuthFormProps {
  onPressAuth: () => void;
  AuthButtonTitle: string;
}

const AuthForm = ({ onPressAuth, AuthButtonTitle }: AuthFormProps) => {
  return (
    <View style={styles.formCtnr}>
      <View style={styles.emailCntnr}>
        <Text style={styles.formLabel}>Email:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.emailCntnr}>
        <Text style={styles.formLabel}>Password:</Text>
        <TextInput style={styles.textInput} />
      </View>
      <ButtonComponent buttonName={AuthButtonTitle} onPress={onPressAuth} />
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  formCtnr: {},
  emailCntnr: {
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  formLabel: {
    marginBottom: 5,
  },
});
