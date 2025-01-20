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
  updateModalVisible: boolean;
  setUpdateModalVisible: (e: boolean) => void;
  deleteModalVisible: boolean;
  setDeleteModalVisible: (e: boolean) => void;
}

const TodoItem = ({
  updateModalVisible,
  setUpdateModalVisible,
  deleteModalVisible,
  setDeleteModalVisible,
}: TodoItemProps) => {
  //   const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <Pressable
      onLongPress={() => setDeleteModalVisible(true)}
      style={styles.toDoItemCntnr}
      //   onPress={() => setUpdateModalVisible(true)}
      onPress={() =>
        navigation.navigate("Details", {
          toDoId: 1,
          toDoTitle: "NAme",
          toDoStatus: "completed",
          todoDetails: "ajdklasjdkljasldjklasjdkask",
        })
      }
    >
      <Modal visible={updateModalVisible} transparent animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.expandedItemCntnr}>
            <TouchableOpacity
              onPress={() => setUpdateModalVisible(false)}
              style={styles.closeButton}
            >
              <AntDesign name="closecircle" size={30} color="purple" />
            </TouchableOpacity>
            <Text style={styles.modalTitleCntnr}>TodoItemName Completed ?</Text>
            <View style={styles.modalBtnCntnr}>
              <ButtonComponent buttonName="Yes" onPress={() => {}} />
            </View>
            <View style={styles.modalBtnCntnr}>
              <ButtonComponent buttonName="No" onPress={() => {}} />
            </View>
          </View>
        </View>
      </Modal>
      <Modal visible={deleteModalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.expandedItemCntnr}>
            <TouchableOpacity
              onPress={() => setDeleteModalVisible(false)}
              style={styles.closeButton}
            >
              <AntDesign name="closecircle" size={30} color="purple" />
            </TouchableOpacity>
            <Text style={styles.modalTitleCntnr}>Delete TodoItemName ?</Text>
            <View style={styles.modalBtnCntnr}>
              <ButtonComponent buttonName="Yes" onPress={() => {}} />
            </View>
            <View style={styles.modalBtnCntnr}>
              <ButtonComponent buttonName="No" onPress={() => {}} />
            </View>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.labels}>Title</Text>
        <Text>TodoItem</Text>
      </View>
      <View>
        <Text style={styles.labels}>Status</Text>
        <Text>Completed</Text>
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
