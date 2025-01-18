import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonComponentProps {
  onPress: () => void;
  buttonName: string;
}
const ButtonComponent = ({ onPress, buttonName }: ButtonComponentProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnCtnr}>
      <Text>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  btnCtnr: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});
