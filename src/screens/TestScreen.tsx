import {AsyncExpenseStorage} from "../storage/asyncStorage/index";
import { mockExpenses } from "../utils/mockExpense";
import { Expense } from "../models";


const storage = new AsyncExpenseStorage();

/**
 * Test số 1
 * Test create()
 */
await storage.create(mockExpenses[0]);

await storage.create(mockExpenses[1]);

await storage.create(mockExpenses[2]);

console.log(
    await storage.getAll()
);

/**
 * Test số 2
 * Test getById()
 */
// ID tồn tại
console.log(
    await storage.getById("2")
);

// ID không tồn tại -> null
console.log(
    await storage.getById("100")
);

/**
 * Test số 3
 * Test update()
 */
// Lấy Object
const expense = await storage.getById("2");

if (expense) {
    const updateExpense: Expense = {
        ...expense,
        expenseName: "Milk Tea",
        amount: 70,
    };

    await storage.update(updateExpense);
}

/**
 * Test số 4
 * Test delete()
 */
// Lấy Object
await storage.delete("2");

console.log(
    await storage.getAll()
);

