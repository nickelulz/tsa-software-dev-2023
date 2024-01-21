import React, { useContext } from "react";
import {
	SafeAreaView,
	View,
	Text,
	TouchableOpacity,
	Image,
} from "react-native";

import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Theme/Colors
import { Colors } from "../Config";
import { ThemeContext } from "../Util";

// Components
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const LoginScreen = ({ navigation }) => {
	const { theme } = useContext(ThemeContext);
	let activeColors = Themes[theme.mode];

	return (
		<SafeAreaView style={{
			backgroundColor: activeColors.primary,
			flex: 1,
			justifyContent: "center",
		}}>
			<View style={{ paddingHorizontal: 25 }}>

				{/* Header Text */}
				<Text style={{
					fontSize: 28,
					fontWeight: "500",
					color: activeColors.tint,
					marginBottom: 15,
				}}>Reset Your Password</Text>

				{/* Paragraph */}
				<Text style={{
					fontSize: 16,
					color: activeColors.text,
					marginBottom: 30,
				}}>Uh oh! Tell us the email associated with your account, and we'll send you an email to change your password.</Text>

				{/* Email Address Input Box */}
				<InputField
					selectionColor={activeColors.tint}
					label={"Email Address"}
					icon={
						<MaterialIcons
							name="alternate-email"
							size={20}
							color="#666"
							style={{ marginRight: 7, marginTop: 3 }}
						/>
					}
					keyboardType="email-address"
				/>

				{/* Submit Button */}
				<CustomButton
					label={"Submit"}
					onPress={() => {
						navigation.navigate("Footer");
					}}
				/>

			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
