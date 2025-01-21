import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import ButtonComponent from "../ButtonComponent";

interface AuthFormProps {
  onPressLogin: () => void;
  onPressSignUp: () => void;
  AuthButtonTitle: string;
  AuthButtonTitle2: string;
  email: string;
  password: string;
  onChangeEmail: (e: string) => void;
  onChangePassword: (e: string) => void;
}

const AuthForm = ({
  onPressLogin,
  onPressSignUp,
  AuthButtonTitle,
  AuthButtonTitle2,
  email,
  password,
  onChangeEmail,
  onChangePassword,
}: AuthFormProps) => {
  return (
    <View style={styles.formCtnr}>
      <View style={styles.emailCntnr}>
        <Text style={styles.formLabel}>Email:</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={onChangeEmail}
        />
      </View>
      <View style={styles.emailCntnr}>
        <Text style={styles.formLabel}>Password:</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={onChangePassword}
        />
      </View>
      <View style={styles.LoginButton}>
        <ButtonComponent buttonName={AuthButtonTitle} onPress={onPressLogin} />
      </View>

      <ButtonComponent buttonName={AuthButtonTitle2} onPress={onPressSignUp} />
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

  LoginButton: {
    marginBottom: 20,
  },
});
