import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import ButtonComponent from "../../components/ButtonComponent";

type TodoDetailsRouteParams = {
  toDoId: number;
  toDoStatus: boolean;
  todoDetails: string;
  toDoTitle: string;
};

type TodoDetailsProps = {
  route: RouteProp<{ TodoDetails: TodoDetailsRouteParams }, "TodoDetails">;
};

const TodoDetails = ({ route }: TodoDetailsProps) => {
  const { toDoId, toDoStatus, todoDetails, toDoTitle } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.todoDetailsContainer}>
      <Text style={styles.toDoTitle}>{toDoTitle}</Text>
      {/* <Text> the item id is {toDoId} </Text> */}
      <View style={styles.statusContainer}>
        <Text>Status:</Text>
        <Text>{toDoStatus ? "completed" : "not complete"}</Text>
      </View>

      <View style={styles.detailsCntnr}>
        <Text>Todo details:</Text>
        <View style={styles.detailsWarapper}>
          <Text>{todoDetails}</Text>
        </View>
      </View>

      <View>
        <ButtonComponent
          buttonName={toDoStatus ? "Mark as Incomplete" : "Mark as Completed"}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <View style={styles.deleteButton}>
        <ButtonComponent
          buttonName="Delete"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default TodoDetails;

const styles = StyleSheet.create({
  todoDetailsContainer: {
    padding: 20,
  },
  toDoTitle: {
    fontSize: 40,
    marginVertical: 20,
  },
  statusContainer: {
    flexDirection: "row",
  },
  detailsWarapper: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 5,
  },
  detailsCntnr: {
    marginVertical: 20,
  },
  deleteButton: { marginTop: 20 },
});
