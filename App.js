import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from "react";

//TEST COMMON IMPORT
import { storage } from "./src/storage";
import { mockExpenses } from "./src/utils/mockExpense";

//TEST ASYNC STORAGE  IMPORT
import AsyncStorage from "@react-native-async-storage/async-storage";

//TEST SQLite  IMPORT
import { database } from "./src/storage/sqlite";


export default function App() {
// TEST AsyncStorage
  // useEffect(() => {

  //     async function test() {

  //         // Reset AsyncStorage
  //         await AsyncStorage.removeItem("expenses");

  //         console.log("========== CREATE ==========");

  //         await storage.create(mockExpenses[0]);
  //         await storage.create(mockExpenses[1]);
  //         await storage.create(mockExpenses[2]);

  //         console.log(await storage.getAll());

  //         console.log("========== GET BY ID ==========");

  //         console.log(await storage.getById("2"));

  //         console.log("========== UPDATE ==========");

  //         const expense = await storage.getById("2");

  //         if (!expense) {
  //             console.log("Expense not found.");
  //             return;
  //         }

  //         const updateExpense = {
  //             ...expense,
  //             expenseName: "Updated Coffee",
  //             amount: 999,
  //             isFavorite: true,
  //         };

  //         await storage.update(updateExpense);

  //         console.log(await storage.getById("2"));

  //         console.log("========== DELETE ==========");

  //         await storage.delete("1");

  //         console.log(await storage.getAll());

  //     }

  //     test();

  // }, []);

// TEST SQLite
  // useEffect(() => {

  //   async function test() {

  //       database.runSync(`
  //           DELETE FROM expenses;
  //       `);

  //       console.log("========== CREATE ==========");

  //       await storage.create(mockExpenses[0]);
  //       await storage.create(mockExpenses[1]);
  //       await storage.create(mockExpenses[2]);

  //       console.log(await storage.getAll());

  //       console.log("========== GET BY ID ==========");

  //       console.log(await storage.getById("2"));

  //       console.log("========== UPDATE ==========");

  //       const expense = await storage.getById("2");

  //       if (!expense) return;

  //       const updateExpense = {
  //           ...expense,
  //           expenseName: "Updated Coffee",
  //           amount: 999,
  //           isFavorite: true,
  //       };

  //       await storage.update(updateExpense);

  //       console.log(await storage.getById("2"));

  //       console.log("========== DELETE ==========");

  //       await storage.delete("1");

  //       console.log(await storage.getAll());

  //   }

  //   test();

  // }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
