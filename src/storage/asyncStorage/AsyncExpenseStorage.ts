// AsyncStorage - Dùng để lưu dữ liệu.
import AsyncStorage from "@react-native-async-storage/async-storage";
// Là Model - Để TypeScript biết dữ liệu có dạng gì.
import { Expense } from "../../models";
// Để class bắt buộc phải có CRUD.
import { IBaseStorage } from "../interfaces";
// Để không hard-code.
import { STORAGE_KEYS } from "./keys";

//Đây là lớp lưu Expense bằng AsyncStorage.
export class AsyncExpenseStorage implements IBaseStorage<Expense> {
    // Đây là helper: AsyncStorage -> JSON -> Expense[]
    private async read(): Promise<Expense[]> {
        // Lấy dữ liệu (string)
        const data = await AsyncStorage.getItem(
            STORAGE_KEYS.EXPENSE
        );

        // Nếu không có dữ liệu thì trả mảng rỗng
        if (!data) {
            return [];
        }

        //Parse JSON (string -> Expense[])
        return JSON.parse(data);
    }

    private async write(expenses: Expense[]): Promise<void> {
        // Expense[] -> JSON -> AsyncStorage
        await AsyncStorage.setItem(
            STORAGE_KEYS.EXPENSE,
            JSON.stringify(expenses)
        );
    }

    // GET ALL
    async getAll(): Promise<Expense[]> {
        // Vì logic đọc dữ liệu đã nằm trong read().
        return await this.read();

        /**
         * Cách dùng:
         * const expenses = await storage.getAll();
         */
    }
    // GET BY ID
    async getById(id: string): Promise<Expense | null> {
        // 1. Đọc toàn bộ dữ liệu
        const expenses = await this.read();
        // 2. Tìm theo id
        const expense = expenses.find(
            (item) => item.id === id
        );

        // 3. Nếu tìm thấy thì trả về expense, không thì trả null
        return expense ?? null;

        /**
         * Cách dùng:
         * await storage.getById(":id")
         */
    }
    // CREATE
    async create(expense: Expense): Promise<void> {
        // 1. Đọc toàn bộ dữ liệu.
        const expenses = await this.read();
        // 2. push() thêm phần tử vào cuối mảng.
        expenses.push(expense);
        // 3. Lưu mảng mới vào AsyncStorage.
        await this.write(expenses);

        // Vì Repository sẽ chịu trách nhiệm sinh id.
        // Storage chỉ lưu nên không có kiểm tra trùng id ở đây

        /**
         * Cách dùng
         * await storage.create({
                id:"2",
                expenseName:"Coffee",
                amount:20,
                date:"2026-07-17",
                category:"Drink",
                isFavorite:false
            });
         */
    }
    // DELETE
    async delete(id: string): Promise<void> {
        // 1. Đọc toàn bộ dữ liệu.
        const expenses = await this.read();

        // 2. Dùng filter để lọc phần tử muốn xóa
        // Mục đích là tạo mảng mới không chưa phần tử muốn xóa
        const newExpenses = expenses.filter(
            (expense) => expense.id !== id
        );

        // 3. Lưu mảng mới vào AsyncStorage.
        await this.write(newExpenses);
    }

    async update(expense: Expense): Promise<void> {
        // 1. Đọc toàn bộ dữ liệu.
        const expenses = await this.read();

        // 2. Nếu đúng id thì thay bằng object mới, nếu không thì giữ nguyên
        const updatedExpenses = expenses.map((item) =>
            item.id === expense.id ? expense : item
        );

        // 3. Lưu mảng mới vào AsyncStorage.
        await this.write(updatedExpenses);

    }
}