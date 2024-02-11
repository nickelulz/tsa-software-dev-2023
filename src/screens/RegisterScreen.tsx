import React, { useState, useContext } from "react";

// Theming
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { APP_NAME, APP_NAME_SHORT } from "../Config";
import { ThemeContext, Colors } from '../Theme'

// Components
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const Register = ({ navigation }) => {
	const { current_theme } = React.useContext(ThemeContext);
	const theme = Colors[current_theme.mode];

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);

	return (
		<SafeAreaView
			style={{
				backgroundColor: theme.primary,
				flex: 1,
				justifyContent: "center",
			}}
		>
			<View style={{ paddingHorizontal: 25 }}>

				<Text style={{
					fontSize: 28,
					fontWeight: "500",
					color: theme.tint,
					marginBottom: 30,
				}}>Create an account with {APP_NAME}!</Text>

				<InputField
					selectionColor={theme.tint}
					label={"Email Addressz"}
					icon={
						<FontAwesome5
							name="hashtag"
							size={20}
							color="#666"
							style={{ marginRight: 7, marginTop: 3 }}
						/>
					}
					keyboardType="email-address"
				/>

				<InputField
					label={"Password"}
					icon={
						<Ionicons
							name="ios-lock-closed-outline"
							size={20}
							color="#666"
							style={{ marginRight: 5 }}
						/>
					}
					inputType="password"
				/> 

				<CustomButton
					label={"Register"}
					onPress={() => {
						navigation.navigate("Footer");
					}}
				/>
			</View>
		</SafeAreaView>
	);
};

export default Register;
