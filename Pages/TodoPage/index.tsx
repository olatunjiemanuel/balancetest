import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonComponent from "../../components/ButtonComponent";
import TodoItem from "../../components/TodoItem";

const TodoPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  return (
    <View style={styles.mainCntnr}>
      <View>
        <TodoItem
          updateModalVisible={updateModalVisible}
          setUpdateModalVisible={setUpdateModalVisible}
          deleteModalVisible={deleteModalVisible}
          setDeleteModalVisible={setDeleteModalVisible}
        />
      </View>
      <View>
        <ButtonComponent
          buttonName="Logout"
          onPress={() => navigation.popTo("Login")}
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
});
