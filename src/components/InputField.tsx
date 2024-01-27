import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

// Theme/Colors
import { ThemeContext } from "../Config";

export default function InputField({
	label,
	icon,
	inputType,
	keyboardType,
	fieldButtonLabel,
	fieldButtonFunction,
}) {
	const { theme } = React.useContext(ThemeContext);

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
