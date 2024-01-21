import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import DashboardScreen from "../screens/DashboardScreen";

// Theme/Colors
import { Colors } from "../Config";
import { ThemeContext } from "../Util";

const Tab = createBottomTabNavigator();

export default function Footer() {
	const { theme, updateTheme } = useContext(ThemeContext);
	let activeColors = Colors[theme.mode];

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({

				tabBarStyle: { backgroundColor: activeColors.secondary, },

				headerShown: true,

				// Icon
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === "Dashboard") {
						iconName = focused ? "home" : "home-outline";
						return <Ionicons name={iconName} size={24} color={color} />;
					} 

					else if (route.name === "Settings") {
						iconName = focused ? "settings" : "settings-outline";
						return <Ionicons name={iconName} size={24} color={color} />;
					} 

					else if (route.name === "Leaderboard") {
						return <MaterialIcons name={leaderboard} size={24} color={color} />;
					} 

					else if (route.name === "Calendar") {
						iconName = focused ? "calendar" : "calendar-outline";
						return <Ionicons name={iconName} size={24} color={color} />;
					}
				},

				// Tab Bar Settings
				tabBarActiveTintColor: activeColors.accent,
				tabBarInactiveTintColor: activeColors.tertiary,
				tabBarStyle: { backgroundColor: activeColors.secondary, },

				// Header Settings
				headerTitleAlign: "left",
				headerTitleStyle: {
					paddingLeft: 10,
					fontSize: 24,
				},
				headerStyle: { backgroundColor: activeColors.secondary, },
				headerTintColor: activeColors.tint,
			})}
		>
			<Tab.Screen name="Dashboard" component={DashboardScreen} />
		</Tab.Navigator>
	);
}
