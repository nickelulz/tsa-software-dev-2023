import React, { useContext, useState, useRef } from "react";
import { View, ScrollView, RefreshControl, StyleSheet } from "react-native";

// Theme/Colors
import { Colors } from "../Config";
import { ThemeContext } from "../Util";

const DashboardScreen = () => {
	const { theme } = useContext(ThemeContext);
	let activeColors = Themes[theme.mode];

	const [refreshing, setRefreshing] = useState(false);

	const onRefresh = () => {
		setRefreshing(true);

		// Fetch new data here and update your state

		// After fetching the data, set refreshing to false
		setRefreshing(false);
	};

	return (
		<ScrollView
			showsVerticalScrollIndicator = { false }

			style = {[
				{ backgroundColor: activeColors.primary, },
				styles.Container,
			]}

			contentContainerStyle = {{ flexGrow: 1 }}

			refreshControl = {
				<RefreshControl refreshing = {refreshing} onRefresh = {onRefresh} />
			}
		>
			<View style={{ flexGrow: 1 }}>
				<ScrollView>
					<View style = {
						{
							flexDirection: "row",
							marginTop: 10,
							paddingHorizontal: 10,
						}
					}></View>
				</ScrollView>
					
				<ScrollView>
					<View style = {
						{
							flexDirection: "row",
							marginTop: 10,
							paddingHorizontal: 10,
						}
					}></View>
				</ScrollView>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	Container: {
		flex: 1,
	},
	sectionTitle: {
		marginTop: 25,
		marginLeft: 25,
		marginBottom: 25,
	},
});

export default DashboardScreen;
