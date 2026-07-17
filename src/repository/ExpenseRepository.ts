//Repository hiện tại chỉ ủy quyền (delegate) cho Storage.
//Sau này nếu đề thi yêu cầu validation, filter, sort... thì thêm vào đây.
/**
* Quy ước cho Repository
* async method(...): Promise<...> {
*   return await this.storage.method(...);
* }
 */
import { Expense } from "../models";

import { IBaseStorage } from "../storage/interfaces";

import { storage } from "../storage";

import { generateNextId } from "../utils/idGenerator";

export class ExpenseRepository {
    private storage: IBaseStorage<Expense>;

    constructor() {
        this.storage = storage;
    }

    //GET ALL
    async getAll(): Promise<Expense[]> {

        return await this.storage.getAll();

    }
    //GET BY ID
    async getById(id: string): Promise<Expense | null> {

        return await this.storage.getById(id);

    }

    //CREATE
    async create(expense: Expense): Promise<void> {

        // Business Logic (nếu có)
        const expenses = await this.storage.getAll();

        const newExpense: Expense = {
            ...expense,
            id: generateNextId(
                expenses.map(item => item.id)
            ),
        };

        return await this.storage.create(newExpense);
    }

    //Update
    async update(expense: Expense): Promise<void> {

        // Business Logic (nếu có)

        return await this.storage.update(expense);

    }

    //DELETE
    async delete(id: string): Promise<void> {

        // Business Logic (nếu có)

        return await this.storage.delete(id);

    }


}

export const repository = new ExpenseRepository();