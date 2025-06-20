import Amplify, { Auth } from "aws-amplify"
import React, { JSX, useEffect, useReducer, useState } from "react"
import { SafeAreaView, StyleSheet } from "react-native"
import "react-native-get-random-values"
import { Note } from "./src/API"
import awsconfig from "./src/aws-exports"
import { ltuRose } from "./src/constants/colors"
import AppContext from "./src/context/AppContext"
import { getNotesService } from "./src/services/getNotesService"
import { NotesAction, NotesState } from "./src/types"
import { LoginScreen } from "./src/views/LoginScreen"
import { UserAuthenticated } from "./src/views/UserAuthenticated"
Amplify.configure(awsconfig)

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [shouldRefetch, setShouldRefetch] = useState(false)

	const notesReducer = (state: NotesState, action: NotesAction) => {
		switch (action.type) {
			case "FETCH_NOTES_SUCCESS":
				return {
					...state,
					notes: action.payload,
					loading: false,
					error: false,
				}
			case "FETCH_NOTES_LOADING":
				return { ...state, loading: true, error: false }
			case "FETCH_NOTES_ERROR":
				return { ...state, loading: false, error: true }
			case "ADD_NOTE_FROM_SUBSCRIPTION":
				return { ...state, notes: [...state.notes, action.payload] }
			default:
				return state
		}
	}

	const [fetchedNotes, dispatch] = useReducer(notesReducer, {
		notes: [],
		refetch: false,
		loading: true,
		error: false,
	})

	const appStore = {
		isLoggedIn,
		setIsLoggedIn,
		fetchedNotes,
		setShouldRefetch,
	}

	// Check if user is authenticated on app load
	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then(() => setIsLoggedIn(true))
			.catch(() => setIsLoggedIn(false))
	}, [])

	// Fetch notes when user is logged in
	useEffect(() => {
		if (!isLoggedIn) return
		const getNotes = async () => {
			const response = await getNotesService()
			if (!response?.data?.listNotes) {
				dispatch({ type: "FETCH_NOTES_ERROR" })
				return
			}
			dispatch({
				type: "FETCH_NOTES_SUCCESS",
				payload: response.data.listNotes.items as Note[],
			})
		}
		getNotes()
	}, [isLoggedIn, shouldRefetch])

	return (
		<AppContext.Provider value={appStore}>
			<SafeAreaView style={styles.container}>
				{isLoggedIn ? (
					<UserAuthenticated />
				) : (
					((<LoginScreen onLoginSuccess={() => setIsLoggedIn(true)} />) as JSX.Element)
				)}
			</SafeAreaView>
		</AppContext.Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: ltuRose,
	},
})
