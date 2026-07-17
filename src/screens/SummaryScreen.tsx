import { useEffect, useState } from "react";

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from "react-native";

import { PieChart } from "react-native-chart-kit";

import { Expense } from "../models";

import { ExpenseRepository } from "../repository/ExpenseRepository";

import { groupTotalByCategory } from "../utils/statistics"

export default function SummaryScreen() {

    const repository = new ExpenseRepository();

    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        loadExpenses();
    }, []);

    async function loadExpenses() {

        const data = await repository.getAll();

        setExpenses(data);

    }

    const totalExpense = expenses.reduce(
        (sum, item) => sum + item.amount,
        0
    );

    const categorySummary = groupTotalByCategory(expenses);

    const colors = [
        "#FF6384",
        "#36A2EB",
        "#FFCE56",
        "#4CAF50",
        "#9C27B0",
    ];

    const pieData = Object.entries(categorySummary).map(
        ([category, total], index) => ({
            name: category,
            amount: total,
            color: colors[index % colors.length],
            legendFontColor: "#000",
            legendFontSize: 14,
        })
    );

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Summary
            </Text>

            <Text>
                Total Expenses: {expenses.length}
            </Text>

            <Text>
                Total Amount: {totalExpense}
            </Text>

            <Text
                style={styles.subTitle}
            >
                By Category
            </Text>

            {
                Object.entries(categorySummary).map(

                    ([category, total]) => (

                        <Text key={category}>

                            {category}: {total}

                        </Text>

                    )

                )
            }

            <PieChart
                data={pieData}
                width={Dimensions.get("window").width - 32}
                height={220}
                chartConfig={{
                    color: () => "#000",
                }}
                accessor="amount"
                backgroundColor="transparent"
                paddingLeft="16"
                absolute
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

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    subTitle: {

        fontSize:18,

        fontWeight:"bold",

        marginTop:20,

        marginBottom:10,

    },

});