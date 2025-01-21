import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import ButtonComponent from "../ButtonComponent";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface TodoItemProps {
  toDoId: string;
  toDoTitle: string;
  toDoStatus: boolean;
  todoDetails: string;
}

const TodoItem = ({
  toDoId,
  toDoTitle,
  toDoStatus,
  todoDetails,
}: TodoItemProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <Pressable
      style={styles.toDoItemCntnr}
      onPress={() =>
        navigation.navigate("Details", {
          toDoId: toDoId,
          toDoTitle: toDoTitle,
          toDoStatus: toDoStatus,
          todoDetails: todoDetails,
        })
      }
    >
      <View>
        <Text style={styles.labels}>Title</Text>
        <Text>{toDoTitle}</Text>
      </View>
      <View>
        <Text style={styles.labels}>Status</Text>
        <Text>{toDoStatus ? "completed" : "Not complete"}</Text>
      </View>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  toDoItemCntnr: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "purple",
    marginBottom: 10, // change this
  },
  labels: {
    color: "purple",
    marginBottom: 5,
    fontWeight: 300,
  },
  modalBackground: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
  },
  expandedItemCntnr: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 300,
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  closeButton: {
    alignSelf: "flex-end",
  },
  modalTitleCntnr: {
    color: "purple",
    marginBottom: 40,
    fontWeight: 600,
    fontSize: 20,
  },
  modalBtnCntnr: {
    marginTop: 20,
  },
});
