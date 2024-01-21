import { Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";

// Theme/Colors
import { Colors } from "../Config";
import { ThemeContext } from "../Util";

export default function CustomButton({ label, onPress }) {
	const { theme } = useContext(ThemeContext);
	let activeColors = Colors[theme.mode];

	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				backgroundColor: activeColors.accent,
				padding: 20,
				borderRadius: 10,
				marginBottom: 30,
			}}
		>
			<Text
				style={{
					textAlign: "center",
					fontWeight: "700",
					fontSize: 16,
					color: "#fff",
				}}
			>
				{label}
			</Text>
		</TouchableOpacity>
	);
}
