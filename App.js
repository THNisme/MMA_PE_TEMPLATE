import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//TEST IMPORT
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "./src/storage/asyncStorage/keys";
import { AsyncExpenseStorage } from "./src/storage/asyncStorage";
import { mockExpenses } from "./src/utils/mockExpense";
import { Expense } from "./src/models/index";


export default function App() {
// TEST
  // const storage = new AsyncExpenseStorage();

  // useEffect(() => {
  //   async function test() {
  //       // await AsyncStorage.removeItem(STORAGE_KEYS.EXPENSE); //CLEAR Trước khi Create

  //       console.log("========== DELETE ==========");
  //       Viết logic test vô đây
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
