import { useState } from "react";

import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Alert,
    Text,
    Platform,
    Pressable,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

import { Picker } from "@react-native-picker/picker";

import { Expense } from "../models";

import { ExpenseRepository } from "../repository/ExpenseRepository";

import { formatDate } from "../utils/formatDate";

import { CATEGORIES } from "../contants/categories";

export default function AddExpenseScreen() {
    // Tạo repository object
    const repository = new ExpenseRepository();

    // Tạo các state lưu dữ liệu các trường có trong model
    const [expenseName, setExpenseName] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [category, setCategory] = useState(CATEGORIES[0]);

    function clearForm() {
        
        setExpenseName("");
        setAmount("");
        setDate(new Date());
        setCategory("");

    }

    function onChangeDate(
        event: any,
        selectedDate?: Date
    ) {

        setShowDatePicker(false);

        if (selectedDate) {
            setDate(selectedDate);
        }

    }

    function validate(): boolean {

        if (!expenseName.trim()) {

            Alert.alert(
                "Validation",
                "Expense Name is required."
            );

            return false;

        }

        if (!amount || Number(amount) <= 0) {

            Alert.alert(
                "Validation",
                "Amount must be greater than 0."
            );

            return false;

        }

        return true;

    }

    async function saveExpense() {
        // Validate input
        if (!validate()) {
            return;
        }

        // Tạo Oject để bỏ vào hàm create
        const expense: Expense = {

            id: "",

            expenseName,

            amount: Number(amount),

            date: formatDate(date),

            category,

            isFavorite: 0,

        };

        await repository.create(expense);

        Alert.alert("Success", "Expense created.");

        clearForm();

    }

    return (

        <View style={styles.container}>
            <Text style={styles.heading}>CREATE</Text>

            <TextInput
                placeholder="Expense Name"
                value={expenseName}
                onChangeText={setExpenseName}
                style={styles.input}
            />

            <TextInput
                placeholder="Amount"
                keyboardType="numeric"
                value={amount}
                onChangeText={setAmount}
                style={styles.input}
            />

            <Pressable
                style={styles.input}
                onPress={() => setShowDatePicker(true)}
            >
                <Text>
                    {formatDate(date)}
                </Text>

            </Pressable>

            {/* Hiển thị DatePicker */}
            {
                showDatePicker && (
                    <DateTimePicker

                        value={date}

                        mode="date"

                        display={
                            Platform.OS === "ios"
                                ? "spinner"
                                : "default"
                        }

                        onChange={onChangeDate}

                    />

                )
            }

            <View style={styles.pickerContainer}>

                <Picker
                    selectedValue={category}
                    onValueChange={(value) => setCategory(value)}
                >
                    {CATEGORIES.map((item) => (
                        <Picker.Item
                            key={item}
                            label={item}
                            value={item}
                        />
                    ))}
                </Picker>

            </View>

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
        marginVertical: 40,
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

    pickerContainer: {
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 12,
    },

});