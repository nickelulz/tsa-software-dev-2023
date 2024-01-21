import React, { useContext } from "react";

// Components
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";

// Theme/Colors
import { Colors } from "../Config";
import { ThemeContext } from "../Util";

// Icons
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
	const { theme } = useContext(ThemeContext);
	let activeColors = Colors[theme.mode];

	return (
		<SafeAreaView style={{
			backgroundColor: activeColors.primary,
			flex: 1,
			justifyContent: "center",
		}}>
			<View style={{ paddingHorizontal: 25 }}>

			<View style={{ alignItems: "center" }}>
				<Image
					source={require("../assets/logo-large.png")}
					style={{
						height: 200,
						width: 300,
					}}
				/>
			</View>

				<Text style={{
					fontSize: 28,
					fontWeight: "500",
					color: activeColors.tint,
					marginBottom: 30,
					textAlign: "center",
				}}> Welcome Back! </Text>

				<InputField
					selectionColor={activeColors.tint}
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
					<Text style={{ color: activeColors.tint }}>New to <Text style={{ fontWeight: "500" }}>GradeStakes</Text>? </Text>
					<TouchableOpacity onPress={() => navigation.navigate("Register")}>
						<Text style={{ color: activeColors.accent, fontWeight: "700" }}>
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
