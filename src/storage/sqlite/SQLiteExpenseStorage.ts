// Để TypeScript biết kiểu dữ liệu.
import { Expense } from "../../models";
// Để class bắt buộc phải có CRUD.
import { IBaseStorage } from "../interfaces";
// Chính là SQLite.openDatabaseSync(...)
import { database } from "./database";

export class SQLiteExpenseStorage implements IBaseStorage<Expense> {
    
    async getAll(): Promise<Expense[]> {
        try {
            const rows = database.getAllSync(`
                    SELECT *
                    FROM expenses;
                `);
                
                return rows as Expense[];
        } catch (error) {
            console.log(`SQLite_GetAll: ${error}`);
            return [];
        }
    }

    async getById(id: string): Promise<Expense | null> {
        const row = database.getFirstSync(
            `
            SELECT *
            FROM expenses
            WHERE id = ?;
            `,
            [id]
        );

        return row as Expense;
    }

    async create(expense: Expense): Promise<void> {
        try {
            console.log(expense);
            database.runSync(
                `
                INSERT INTO expenses (
                    id,
                    expenseName,
                    amount,
                    date,
                    category,
                    isFavorite
                )
                VALUES (?, ?, ?, ?, ?, ?);
                `,
                [
                    expense.id,
                    expense.expenseName,
                    expense.amount,
                    expense.date,
                    expense.category,
                    expense.isFavorite
                ]
            );
        } catch (error) {
            console.log(`SQLite_Create: ${error}`);
        }
    }

    async update(expense: Expense): Promise<void> {
        database.runSync(
            `
            UPDATE expenses
            SET
                expenseName = ?,
                amount = ?,
                date = ?,
                category = ?,
                isFavorite = ?
            WHERE id = ?;
            `,
            [
                expense.expenseName,
                expense.amount,
                expense.date,
                expense.category,
                expense.isFavorite,
                expense.id
            ]
        );
    }

    async delete(id: string): Promise<void> {
        database.runSync(
            `
            DELETE FROM expenses
            WHERE id = ?;
            `,
            [id]
        );
    }



}