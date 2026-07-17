import { useEffect, useState } from "react";

import {
    View,
    FlatList,
    StyleSheet,
} from "react-native";

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
    // Gọi hàm load dữ liệu lên
    useEffect(() => {
        loadExpenses();
    }, []);


    return(
        <View style={styles.container}>
            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ExpenseCard
                        expense={item}
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