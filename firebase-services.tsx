import { Alert } from "react-native";
import { firebase_app } from "./firebaseConfig";
import { firebase_db } from "./firebaseConfig";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

const auth = getAuth(firebase_app);

export const GetSignedInUser = () => {
  return auth.currentUser;
};

export const storeData = async () => {
  const docRef = await addDoc(collection(firebase_db, "kgBV3kmoljUQNBGJmPY6"), {
    Status: true,
    ToDoName: "Test",
    ToDoDetails: "ashjdkljaskldjlkasjdkasd",
    User: "testuserforstore",
  });
  console.log("Document written with ID: ", docRef.id);
};

export const SignUp = async (email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return response.user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const SignIn = async (email: string, password: string) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in successfully:", response.user);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const Logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out successfully:");
  } catch (error) {
    console.error("Error signing out:", error);
  }
};

export const getTodos = async () => {
  try {
    const user = GetSignedInUser();
    const db = getFirestore(); // Initialise Firestore
    const todosCollection = collection(db, "ToDos");
    const q = query(todosCollection, where("User", "==", user?.email));
    console.log(user?.email);

    const todosSnapshot = await getDocs(q);
    //   const todosSnapshot = await getDocs(todosCollection);

    // const todos = todosSnapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }));
    // console.log("todos: ", todos);
    // return todos;

    const todos = todosSnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        ToDoName: data.ToDoName || "", // Ensure default value
        ToDoDetails: data.ToDoDetails || "", // Ensure default value
        Status: data.Status ?? false, // Ensure default boolean value
      };
    });
    return todos;

    //   todos.forEach((todo) => {
    //     console.log(todo.id, " => ", todo);
    //   });
  } catch (error) {
    console.error("Error fetching documents: ", error);
  }
};
