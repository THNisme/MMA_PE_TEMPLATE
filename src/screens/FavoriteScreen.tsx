import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";


import {
    FlatList,
    StyleSheet,
    View,
} from "react-native";

import ExpenseCard from "../components/ExpenseCard";

import { Expense } from "../models";

import { ExpenseRepository } from "../repository/ExpenseRepository";

export default function FavoriteScreen() {

    const repository = new ExpenseRepository();

    const [expenses, setExpenses] = useState<Expense[]>([]);


    useFocusEffect(
        useCallback(() => {
            loadFavoriteExpenses();
        }, [])
    );

    async function loadFavoriteExpenses() {

        const data = await repository.getAll();

        setExpenses(
            data.filter(item => item.isFavorite)
        );

    }

    return (

        <View style={styles.container}>

            <FlatList
                data={expenses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (

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

    heading: {
        fontSize: 20,
        marginBottom: 12
    },

});