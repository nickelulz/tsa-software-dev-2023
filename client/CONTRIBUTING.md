# Contribution Guide

## Code Style

### Typescript/React Files

* All import statements at the top are grouped and commented appropriately in the following order: 

	1. Core, Non-Stylistic Library Imports (i.e. `import React, { useState, useContext } from 'react';`)
	2. Core, Non-Stylistic Functions and Variable Imports (i.e. `import { storeData, getData } from "./src/ClientDataAPI";`)
	3. Theming and Icon Imports (i.e. `import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";`)
	4. Native/Library ReactJS Components (i.e. `import { SafeAreaView, View, Text, TouchableOpacity, Image } from "react-native";`)
	5. Locally-Defined ReactJS Components (i.e. `import InputField from "../components/InputField";`)
	6. Screens (i.e. `import DashboardScreen from './src/screens/DashboardScreen'`)

	Imports are not required to use any particular style, but the preferred import style is single quotes without semicolons.

	For example:

	```TSX
	// Core Library
	import React, { useState, useEffect } from 'react'
	import { Appearance } from 'react-native'
	import { createStackNavigator } from '@react-navigation/stack'
	import * as SplashScreen from 'expo-splash-screen'

	// Data I/O
	import { storeData, getData } from './src/ClientDataAPI'

	// Components
	import { NavigationContainer } from '@react-navigation/native'
	import Footer from './src/components/Footer'

	// Themes
	import { ThemeContext } from './src/Util'

	// Screens
	import DashboardScreen from './src/screens/DashboardScreen'
	import LoginScreen from './src/screens/LoginScreen'
	import RegisterScreen from './src/screens/RegisterScreen'
	import ForgotScreen from './src/screens/ForgotScreen'
	```

	*from* `src/App.tsx`