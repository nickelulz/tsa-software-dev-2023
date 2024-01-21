import React, { useState, useContext } from "react";

// Theming
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../Config";
import { ThemeContext } from "../Util";

// Components
import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

const Register = ({ navigation }) => {
	const { theme } = useContext(ThemeContext);
	let activeColors = Themes[theme.mode];

	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([
		{label: 'CFISD', value: 'home-access.cfisd.net'},
		{label: 'Katy ISD', value: 'homeaccess.katyisd.org'}
	]);

	return (
		<SafeAreaView
			style={{
				backgroundColor: activeColors.primary,
				flex: 1,
				justifyContent: "center",
			}}
		>
			<View style={{ paddingHorizontal: 25 }}>

				<Text style={{
					fontSize: 28,
					fontWeight: "500",
					color: activeColors.tint,
					marginBottom: 30,
				}}>Create an account with GradeStakes!</Text>

				<InputField
					selectionColor={activeColors.tint}
					label={"HAC User ID"}
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
					label={"HAC Password"}
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

				<DropDownPicker
					open={open}
					value={value}
					items={items}
					setOpen={setOpen}
					setValue={setValue}
					setItems={setItems}
					style={{ marginBottom: 25 }}
					placeholder='Select Your School District'
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
