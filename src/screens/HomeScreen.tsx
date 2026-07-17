import { useCallback, useState, useEffect } from "react";

import {
    View,
    FlatList,
    StyleSheet,
    Alert,
} from "react-native";

import { useFocusEffect } from "@react-navigation/native";

import ExpenseCard from "../components/ExpenseCard";

import { Expense } from "../models";

import { ExpenseRepository } from "../repository/ExpenseRepository";

export default function HomeScreen() {

    // Tạo repository object
    const repository = new ExpenseRepository();
    // Tạo state lưu dữ liệu
    const [expenses, setExpenses] = useState<Expense[]>([]);
    // Hàm load dữ liệu
    async function loadExpenses() {
        const data = await repository.getAll();
        setExpenses(data);
    }
    //Gọi hàm load dữ liệu lên
    useFocusEffect(
        useCallback(() => {
            loadExpenses();
        }, [])
    );

    //Tạo alert
    async function deleteHandle(expense: Expense) {
        Alert.alert(
            // Set title
            "Delete Expense",
            `Expense: ${expense.expenseName} ?`,
            [   //Set nút
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Delete",
                    style: "destructive",
                    onPress: async () => {
                        await repository.delete(expense.id);
                        await loadExpenses();
                        
                        const data = await repository.getAll();
                        console.log(data);
                    }
                }
            ]
        );
    }

    async function favoriteHandle(expense: Expense) {
            await repository.update({...expense, isFavorite: 1});
            await loadExpenses();

            const data = await repository.getAll();
            console.log(data);
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ExpenseCard
                        expense={item}
                        onDelete={deleteHandle}
                        onFavorite={favoriteHandle}
                    />
                )}
            />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 40,
    },
});