import { Expense } from "../models";

import { IBaseStorage } from "./interfaces";

import { AsyncExpenseStorage } from "./asyncStorage";

import { SQLiteExpenseStorage } from "./sqlite";

// Quản lý loại Storage.
export enum StorageType {
    ASYNC_STORAGE = "ASYNC_STORAGE",
    SQLITE = "SQLITE",
}

// Tạo biến cấu hình. 
// Khi đi thi, bạn chỉ cần sửa đúng dòng này.
const DEFAULT_STORAGE: StorageType = StorageType.ASYNC_STORAGE; // hoặc StorageType.ASYNC_STORAGE;

export function createStorage(): IBaseStorage<Expense> {

    switch (DEFAULT_STORAGE) {

        case StorageType.ASYNC_STORAGE:
            return new AsyncExpenseStorage();

        case StorageType.SQLITE:
            return new SQLiteExpenseStorage();

        default:
            throw new Error("Storage type is not supported.");
    }

}

export const storage = createStorage();
