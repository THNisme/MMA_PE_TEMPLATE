import { View, Text, StyleSheet } from "react-native";

import { Expense } from "../models";

type Props = {
    expense: Expense;
};

export default function ExpenseCardDetail({ expense }: Props) {
     return (
        <View style={styles.card}>

            <Text style={styles.title}>
                {expense.expenseName}
            </Text>

            <Text>
                Amount: {expense.amount}
            </Text>

            <Text>
                Date: {expense.date}
            </Text>

            <Text>
                Category: {expense.category}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: "95%",
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        backgroundColor: "#fff",
        elevation: 4,
    },

    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 8,
    },

});