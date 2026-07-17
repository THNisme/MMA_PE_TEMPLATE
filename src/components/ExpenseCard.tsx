import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Expense } from "../models";

type Props = {
    expense: Expense;

    onPress?: (expense: Expense) => void;

    onDelete?: (expense: Expense) => void;

    onFavorite?: (expense: Expense) => void;
};

export default function ExpenseCard({ expense, onPress, onDelete, onFavorite }: Props) {
     return (
        <TouchableOpacity 
            style={styles.card}
            onPress={() => onPress?.(expense)}
        >

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

            <View style={styles.actions}>

            <Text
                style={styles.buttons}
                onPress={() => onFavorite?.(expense)}
            >
                ❤️ Favorite
            </Text>

            <Text
                style={styles.buttons}
                onPress={() => onDelete?.(expense)}
            >
                🗑 Delete
            </Text>

        </View>

        </TouchableOpacity>
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

    actions: {
        marginTop: 12,
        flexDirection: "row",
        justifyContent: "flex-end",
    },

    buttons: {
        padding: 10,
        marginHorizontal: 3,
        backgroundColor: "#287DCB",
        borderRadius: 15,
        color: "#fff"
    }
});