import React from 'react';

import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";

// Theme/Colors
import { APP_NAME } from "../Config";
import { ThemeContext, Colors } from '../Theme'

// Icons
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
	const { current_theme } = React.useContext(ThemeContext);
	const theme = Colors[current_theme.mode];

	return (
		<SafeAreaView style={{
			backgroundColor: theme.primary,
			flex: 1,
			justifyContent: "center",
		}}>
			<View style={{ paddingHorizontal: 25 }}>

			<View style={{ alignItems: "center" }}>
				<Image
					source={require("../assets/nirvo-logo.png")}
					style={{
						height: 200,
						width: 300,
					}}
				/>
			</View>

				<Text style={{
					fontSize: 28,
					fontWeight: "500",
					color: theme.tint,
					marginBottom: 30,
					textAlign: "center",
				}}> Returning Users </Text>

				<InputField
					selectionColor={theme.tint}
					label={"User ID"}
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
					fieldButtonLabel={"Forgot?"}
					fieldButtonFunction={() => navigation.navigate("Forgot")}
				/>

				<CustomButton
					label={"Login"}
					onPress={() => {
						navigation.navigate("Footer");
					}}
				/>

				<View style={{
					flexDirection: "row",
					justifyContent: "center",
					marginBottom: 30,
				}}>
					<Text style={{ color: theme.tint }}>
						New to <Text style={{ fontWeight: "500" }}>{APP_NAME}</Text>
					</Text>
					<TouchableOpacity onPress={() => navigation.navigate("Register")}>
						<Text style={{ color: theme.accent, fontWeight: "700" }}>
							{" "}
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default LoginScreen;
