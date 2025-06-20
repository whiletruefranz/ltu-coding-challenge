import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { ltuBlue, ltuRose } from "../constants/colors"
import { NotesListScreen } from "../views/NotesListScreen"

const Stack = createNativeStackNavigator()

export const NotesStack = () => {
	return (
		<Stack.Navigator
			id="NotesStack"
			initialRouteName="Notizen Übersicht"
			screenOptions={{
				headerStyle: {
					backgroundColor: ltuRose,
				},
				headerTintColor: ltuBlue,
				headerTitleStyle: {
					fontWeight: "bold",
				},
			}}
		>
			<Stack.Screen
				name="Notizen Übersicht"
				component={NotesListScreen}
				initialParams={{ isArchive: false }}
			/>
		</Stack.Navigator>
	)
}
