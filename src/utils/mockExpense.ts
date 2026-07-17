import { Expense } from "../models";

export const mockExpenses: Expense[] = [
    {
        id: "1",
        expenseName: "Food",
        amount: 120,
        date: "2026-07-15",
        category: "Food",
        isFavorite: false,
    },
    {
        id: "2",
        expenseName: "Coffee",
        amount: 50,
        date: "2026-07-16",
        category: "Drink",
        isFavorite: true,
    },
    {
        id: "3",
        expenseName: "Shopping",
        amount: 300,
        date: "2026-07-17",
        category: "Shopping",
        isFavorite: false,
    },
];