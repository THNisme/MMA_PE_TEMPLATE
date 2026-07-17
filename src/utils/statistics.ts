import { Expense } from "../models";

export function groupTotalByCategory(expenses: Expense[]) {
    return expenses.reduce(
    
            (result, expense) => {
    
                if (!result[expense.category]) {
                    result[expense.category] = 0;
                }
                
                result[expense.category] += expense.amount;
                return result;
            },
    
            {} as Record<string, number>
    
        );
}


