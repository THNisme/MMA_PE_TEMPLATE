import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import SummaryScreen from "../screens/SummaryScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";

import { BottomTabParamList } from "./types";

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {

    return (

        <Tab.Navigator>

            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />

            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
            />

            <Tab.Screen
                name="Summary"
                component={SummaryScreen}
            />

            <Tab.Screen
                name="AddExpense"
                component={AddExpenseScreen}
            />

        </Tab.Navigator>

    );

}