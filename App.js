import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from "react";

//TEST IMPORT
import { mockExpenses } from "./src/utils/mockExpense";
import { ExpenseRepository } from "./src/repository/ExpenseRepository";

export default function App() {
//   async function runTest() {

//       const repository = new ExpenseRepository();

//       console.log("========== START TEST ==========");

//       // Xóa toàn bộ dữ liệu cũ (nếu muốn)
//       const oldData = await repository.getAll();

//       for (const item of oldData) {
//           await repository.delete(item.id);
//       }

//       console.log("Database cleaned.");

//       // CREATE
//       for (const expense of mockExpenses) {
//           await repository.create(expense);
//       }

//       console.log("Create success.");

//       // GET ALL
//       const expenses = await repository.getAll();

//       console.log("All Expenses:", expenses);

//       // GET BY ID
//       const firstExpense = await repository.getById(expenses[0].id);

//       console.log("Get By Id:", firstExpense);

//       // UPDATE
//       if (firstExpense) {

//           await repository.update({
//               ...firstExpense,
//               amount: 50000,
//           });

//           console.log("Update success.");

//       }

//       console.log(
//           "After Update:",
//           await repository.getAll()
//       );

//       // DELETE
//       if (firstExpense) {

//           await repository.delete(firstExpense.id);

//           console.log("Delete success.");

//       }

//       console.log(
//           "After Delete:",
//           await repository.getAll()
//       );

//       console.log("=========== END TEST ===========");

//   }

  useEffect(() => {

        runTest();

    }, []);

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
