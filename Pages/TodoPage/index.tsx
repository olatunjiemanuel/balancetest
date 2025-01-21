import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import {
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonComponent from "../../components/ButtonComponent";
import TodoItem from "../../components/TodoItem";
import { Logout } from "../../firebase-services";
import AntDesign from "@expo/vector-icons/AntDesign";
import { firebase_db } from "../../firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { GetSignedInUser, getTodos } from "../../firebase-services";

const TodoPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [customToDoList, setCustomToDoList] = useState<
    { id: string; ToDoName: string; ToDoDetails: string; Status: boolean }[]
  >([]);
  const [newToDoName, setNewToDoName] = useState("");
  const [newToDoDetails, setNewToDoDetails] = useState("");

  const user = GetSignedInUser();
  useEffect(() => {
    getCustomToDoList();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getCustomToDoList();
    }, [])
  );

  const getCustomToDoList = async () => {
    if (user?.email) {
      const TodoList = await getTodos();
      if (TodoList) {
        setCustomToDoList(TodoList);
      }
    }
  };

  const storeData = async () => {
    const docRef = await addDoc(collection(firebase_db, "ToDos"), {
      Status: false,
      ToDoName: newToDoName,
      ToDoDetails: newToDoDetails,
      User: user?.email,
    });
    console.log("Document written with ID: ", docRef.id);
    getCustomToDoList();
  };

  return (
    <View style={styles.mainCntnr}>
      <Modal visible={updateModalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.expandedItemCntnr}>
            <TouchableOpacity
              onPress={() => setUpdateModalVisible(false)}
              style={styles.closeButton}
            >
              <AntDesign name="closecircle" size={30} color="purple" />
            </TouchableOpacity>
            <Text style={styles.modalTitleCntnr}>Add ToDo</Text>

            <Text>ToDo Name</Text>
            <TextInput
              value={newToDoName}
              onChangeText={(text) => setNewToDoName(text)}
              style={styles.addToDoInput}
              placeholder="please enter toDo name here"
            />
            <Text>ToDo details</Text>
            <TextInput
              value={newToDoDetails}
              onChangeText={(text) => setNewToDoDetails(text)}
              style={styles.addToDoInput}
              placeholder="please enter toDo details here"
            />
            <View style={styles.modalBtnCntnr}>
              <ButtonComponent
                buttonName="Add"
                onPress={() => {
                  storeData();
                  setNewToDoName("");
                  setNewToDoDetails("");
                  setUpdateModalVisible(false);
                }}
              />
            </View>
            <View style={styles.modalBtnCntnr}>
              <ButtonComponent
                buttonName="Cancel"
                onPress={() => setUpdateModalVisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>

      <View>
        <ButtonComponent
          buttonName="Add ToDo"
          onPress={() => {
            // console.log("Add ToDo");
            setUpdateModalVisible(true);
          }}
        />
      </View>
      <View style={styles.TodosContnr}>
        {customToDoList ? (
          <FlatList
            data={customToDoList}
            renderItem={({ item }) => (
              <TodoItem
                toDoId={item.id}
                toDoTitle={item.ToDoName}
                todoDetails={item.ToDoDetails}
                toDoStatus={item.Status}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>No Todos</Text>
        )}
      </View>
      <View>
        <ButtonComponent
          buttonName="Logout"
          onPress={() => {
            Logout();
            navigation.popTo("Login");
          }}
        />
      </View>
    </View>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  mainCntnr: {
    padding: 20,
  },
  TodosContnr: {
    marginTop: 10,
  },
  modalBackground: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#rgba(0, 0, 0, 0.5)",
  },
  expandedItemCntnr: {
    flex: 1,
    backgroundColor: "white",
    marginVertical: 150,
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
  addToDoInput: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    marginTop: 5,
  },
});
