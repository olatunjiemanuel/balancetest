import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AuthForm from "../../components/AuthForm";
import { firebase_app } from "../../firebaseConfig";
import { firebase_db } from "../../firebaseConfig";
import { SignUp, SignIn, Logout } from "../../firebase-services";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";

const LoginPage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const auth = getAuth(firebase_app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const storeData = async () => {
  //     const docRef = await addDoc(
  //       collection(firebase_db, "kgBV3kmoljUQNBGJmPY6"),
  //       {
  //         Status: true,
  //         ToDoName: "asdsadsad",
  //         ToDoDetails: "another item",
  //         User: "testuserforstore",
  //       }
  //     );
  //     console.log("Document written with ID: ", docRef.id);
  //   };

  const handleSignUp = async () => {
    try {
      const response = await SignUp(email, password);
      console.log("User signed up successfully:", response);
      navigation.replace("Todos");
    } catch (error) {
      Alert.alert("Error signing up", JSON.stringify((error as any).message));
      //   console.error("Error signing up:", error);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await SignIn(email, password);
      //   Alert.alert("User signed in successfullly");
      navigation.replace("Todos");
      console.log("User signed in successfully:", response);
    } catch (error) {
      Alert.alert("Error signing in", JSON.stringify((error as any).message));
    }
  };

  return (
    <View style={styles.container}>
      <AuthForm
        email={email}
        password={password}
        onChangeEmail={(text) => setEmail(text)}
        onChangePassword={(text) => setPassword(text)}
        // onPressAuth={() => navigation.replace("Todos")}
        onPressLogin={() => {
          handleSignIn();
        }}
        onPressSignUp={() => {
          handleSignUp();
        }}
        AuthButtonTitle="Login"
        AuthButtonTitle2="Sign Up"
      />
    </View>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  singBtnUpCtnr: {
    marginTop: 20,
  },
});
