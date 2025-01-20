import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";
import ButtonComponent from "../../components/ButtonComponent";

type TodoDetailsRouteParams = {
  toDoId: number;
  toDoStatus: string;
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
    <View>
      <Text> the item id is {JSON.stringify(toDoId)} </Text>
      <Text>other details{JSON.stringify(toDoStatus)}</Text>
      <Text>other details{JSON.stringify(todoDetails)}</Text>
      <Text>other details{JSON.stringify(toDoTitle)}</Text>
      <View>
        <ButtonComponent
          buttonName="Update to complete"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    </View>
  );
};

export default TodoDetails;

const styles = StyleSheet.create({});
