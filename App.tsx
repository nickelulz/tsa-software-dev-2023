import React from "react"
import { Appearance } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import * as SplashScreen from "expo-splash-screen"

import { ThemeContext, Colors } from './src/Theme.tsx'

import Footer from "./src/components/Footer"

// Screens
import LoginScreen from './src/screens/LoginScreen'
import RegisterScreen from './src/screens/RegisterScreen'
import ForgotScreen from './src/screens/ForgotScreen'

// Create a Simple Splash Screen
SplashScreen.preventAutoHideAsync();

/*
 * creating stack navigator which will contain
 * login, register and footer screens
 * footer is the bottom tab navigator which
 * includes all the other screens.
 */
const Stack = createStackNavigator();

const App = () => {
	/*
	 * Appearance.getColorScheme() will return the current
	 * theme of the device and save it in theme state.
	 */
	const [theme, setTheme] = React.useState(
		{ mode: Appearance.getColorScheme() });

	/*
	 * Takes newTheme as a parameter if newTheme
	 * is not passed then it will toggle the theme and store the
	 * new theme in async storage
	 */
	const updateTheme = (newTheme) => {
		let mode;

		if (!newTheme) {
			mode = theme.mode === "dark" ? "light" : "dark";
			newTheme = { mode };
		}

		setTheme(newTheme);
		React.storeData("homeTheme", newTheme);
	};

	/*
	 * Fetches the theme from async storage and update the theme of the app
	 * async storage is used to store the last theme that the user chose
	 * so that the theme will be the same when the user opens the app next time
	 */
	const fetchStoredTheme = async () => {
		try {
			const themeData = await getData("homeTheme");

			if (themeData) {
				updateTheme(themeData);
			}
		}

		catch ({ message }) {
			alert(message);
		}

		finally {
			// Hides the splash screen after 1 second
			await setTimeout(() => SplashScreen.hideAsync(), 1000);
		}
	};

	// Called when the app starts
	React.useEffect(() => {
		fetchStoredTheme();

		/*
		 * If the theme of the device changes then the
		 * updateTheme function will be called automatically
		 */
		Appearance.addChangeListener(({ colorScheme }) => {
			updateTheme();
			setTheme({ mode: colorScheme });
		});
	}, []);

	return (
		/*
		 * Passes the theme and updateTheme function to the
		 * ThemeContext.Provider so that it can be used in
		 * all the screens of the app.
		 */
		<ThemeContext.Provider value={{ theme, updateTheme }}>
			<NavigationContainer>

				{/*
				  * Navigator registration -- allows for each screen to
				  * be accessed by the viewer when linked by a button or
				  * link or etc.
				  */}
				<Stack.Navigator initialRouteName="Login">

					{/* Login Screen */}
					<Stack.Screen
						options={{ headerShown: false }}
						name="Login"
						component={LoginScreen}
					/>

					{/* Registration Screen */}
					<Stack.Screen
						options={{ headerShown: false }}
						name="Register"
						component={RegisterScreen}
					/>

					{/* 'Forgot Your Password' Screen */}
					<Stack.Screen
						options={{ headerShown: false }}
						name="Forgot"
						component={ForgotScreen}
					/>

					{/* Footer - NOT a full Screen */}
					<Stack.Screen
						options={{ headerShown: false }}
						name="Footer"
						component={Footer}
					/>

				</Stack.Navigator>

			</NavigationContainer>
		</ThemeContext.Provider>
	);
}

export default App;
