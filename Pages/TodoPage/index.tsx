import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ButtonComponent from "../../components/ButtonComponent";

const TodoPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  return (
    <View style={styles.mainCntnr}>
      <ButtonComponent
        buttonName="Logout"
        onPress={() => navigation.popTo("Login")}
      />
    </View>
  );
};

export default TodoPage;

const styles = StyleSheet.create({
  mainCntnr: {
    padding: 20,
  },
});
