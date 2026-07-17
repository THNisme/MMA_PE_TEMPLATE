import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabNavigator from "./BottomTabNavigator";

import AddExpenseScreen from "../screens/AddExpenseScreen";
import DetailScreen from "../screens/DetailScreen";

import { RootStackParamList } from "./types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="MainTabs"
                component={BottomTabNavigator}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="AddExpense"
                component={AddExpenseScreen}
                options={{
                    title: "Add Expense",
                }}
            />

            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={{
                    title: "Expense Detail",
                }}
            />

        </Stack.Navigator>

    );

}