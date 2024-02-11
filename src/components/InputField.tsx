import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

// Theme/Colors
import { ThemeContext, Colors } from "../Theme";

export default function InputField({
	label,
	icon,
	inputType,
	keyboardType,
	fieldButtonLabel,
	fieldButtonFunction,
}) {
	const { current_theme } = React.useContext(ThemeContext);
	const theme = Colors[current_theme.mode];

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
					placeholderTextColor={theme.text}
					placeholder={label}
					keyboardAppearance={theme.primary}
					keyboardType={keyboardType}
					style={{ flex: 1, paddingVertical: 0, color: theme.tint }}
					secureTextEntry={true}
				/>
			) : (
				<TextInput
					placeholderTextColor={theme.text}
					placeholder={label}
					keyboardAppearance={theme.primary}
					keyboardType={keyboardType}
					style={{ flex: 1, paddingVertical: 0, color: theme.tint }}
				/>
			)}
			<TouchableOpacity onPress={fieldButtonFunction}>
				<Text style={{ color: theme.accent, fontWeight: "700" }}>
					{fieldButtonLabel}
				</Text>
			</TouchableOpacity>
		</View>
	);
}
