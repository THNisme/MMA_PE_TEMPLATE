import { useEffect, useState } from "react";

import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    Text,
} from "react-native";

import { Expense } from "../models";

import { ExpenseRepository } from "../repository/ExpenseRepository";

export default function DetailScreen() {

    const repository = new ExpenseRepository();

    const [expense, setExpense] = useState<Expense | null>(null);

    useEffect(() => {

        loadExpense();

    }, []);

    async function loadExpense() {

        // Tạm hard-code để test
        const data = await repository.getById("1");

        if (data) {

            setExpense(data);

        }

    }

    if (!expense) {

        return null;

    }

    async function saveExpense() {
        if (expense) {
            await repository.update(expense);

            Alert.alert(
                "Success",
                "Expense updated."
            );
        } else {
            Alert.alert(
                "Error",
                "Expense updated failed."
            );
        }

    }

    return (

        <View style={styles.container}>
            <Text style={styles.heading}>DETAIL</Text>
            <TextInput
                style={styles.input}
                value={expense.expenseName}
                onChangeText={(text) =>
                    setExpense({
                        ...expense,
                        expenseName: text,
                    })
                }
            />

            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={expense.amount.toString()}
                onChangeText={(text) =>
                    setExpense({
                        ...expense,
                        amount: Number(text),
                    })
                }
            />

            <Button
                title="Save"
                onPress={saveExpense}
            />

        </View>

    );

    

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        marginVertical: 40
    },

    heading: {
        fontSize: 20,
        marginBottom: 12
    },

    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
    },

});