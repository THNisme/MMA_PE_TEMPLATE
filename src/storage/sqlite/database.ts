import * as SQLite from "expo-sqlite";
/**
 * Mở hoặc Tạo expense.db (expense.db: Đây chỉ là tên file, có thể đổi theo đề bài)
 */
export const database = SQLite.openDatabaseSync("expense.db");

/**
 * Không dùng AUTOINCREMENT.
 * Repository sẽ chịu trách nhiệm sinh ID để thống nhất
 * giữa AsyncStorage và SQLite.
 */
database.execSync(`
CREATE TABLE IF NOT EXISTS expenses(
    id TEXT PRIMARY KEY NOT NULL,
    expenseName TEXT NOT NULL,
    amount REAL NOT NULL,
    date TEXT NOT NULL,
    category TEXT NOT NULL,
    isFavorite BOOLEAN NOT NULL
);
`);