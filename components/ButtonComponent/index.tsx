import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonComponentProps {
  onPress: () => void;
  buttonName: string;
}
const ButtonComponent = ({ onPress, buttonName }: ButtonComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnCtnr}>
      <Text style={styles.buttonTitle}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btnCtnr: {
    backgroundColor: "purple",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonTitle: {
    color: "#fff",
    fontWeight: 700,
  },
});
