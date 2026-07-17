import { BaseModel } from "./BaseModel";

export interface Expense extends BaseModel {
    expenseName: string;

    amount: number;

    date: string;

    category: string;

    isFavorite: boolean;
}

/**
 * Dùng cho Add/Edit Form.
 * Không cần id vì Repository sẽ tự sinh.
 */
export type ExpenseForm = Omit<Expense, "id">;

/**
 * Giá trị mặc định cho Form.
 */
export const defaultExpense: ExpenseForm = {
    expenseName: "",

    amount: 0,

    date: "",

    category: "",

    isFavorite: false,
};