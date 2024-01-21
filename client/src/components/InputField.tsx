import React, { useContext } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

// Theme/Colors
import { Colors } from "../Config";
import { ThemeContext } from "../Util";

export default function InputField({
	label,
	icon,
	inputType,
	keyboardType,
	fieldButtonLabel,
	fieldButtonFunction,
}) {
	const { theme } = useContext(ThemeContext);
	let activeColors = Colors[theme.mode];

	return (
		<View
			style={{
				flexDirection: "row",
				borderBottomColor: "#ccc",
				borderBottomWidth: 1,
				paddingBottom: 8,
				marginBottom: 25,
			}}
		>
			{icon}
			{inputType == "password" ? (
				<TextInput
					placeholderTextColor={activeColors.text}
					placeholder={label}
					keyboardAppearance={activeColors.primary}
					keyboardType={keyboardType}
					style={{ flex: 1, paddingVertical: 0, color: activeColors.tint }}
					secureTextEntry={true}
				/>
			) : (
				<TextInput
					placeholderTextColor={activeColors.text}
					placeholder={label}
					keyboardAppearance={activeColors.primary}
					keyboardType={keyboardType}
					style={{ flex: 1, paddingVertical: 0, color: activeColors.tint }}
				/>
			)}
			<TouchableOpacity onPress={fieldButtonFunction}>
				<Text style={{ color: activeColors.accent, fontWeight: "700" }}>
					{fieldButtonLabel}
				</Text>
			</TouchableOpacity>
		</View>
	);
}