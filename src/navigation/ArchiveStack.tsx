import { createNativeStackNavigator } from "@react-navigation/native-stack"
import React from "react"
import { ltuBlue, ltuRose } from "../constants/colors"
import { NotesListScreen } from "../views/NotesListScreen"

const Stack = createNativeStackNavigator()

export const ArchiveStack = () => {
	return (
		<Stack.Navigator
			id="ArchiveStack"
			initialRouteName="Archivierte Notizen"
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
				name="Archivierte Notizen"
				component={NotesListScreen}
				initialParams={{ isArchive: true }}
			/>
		</Stack.Navigator>
	)
}
