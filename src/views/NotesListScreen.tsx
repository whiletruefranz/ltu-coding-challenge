import { useRoute } from "@react-navigation/native"
import React, { useContext, useMemo, useState } from "react"
import { FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, View } from "react-native"

import { Note } from "../API"
import { LtuButton } from "../components/Button"
import { BUTTON_VARIANTS } from "../components/Button/button.types"
import { LtuCard } from "../components/Card"
import { LtuIcon } from "../components/Icon"
import { LtuInput } from "../components/Input"
import { LtuSpinner } from "../components/Spinner"
import { LtuHeadline } from "../components/typography/Headline"
import { LtuLabel } from "../components/typography/Label"
import { LtuText } from "../components/typography/Text"
import { LtuTitle } from "../components/typography/Title"
import colors, { ltuRoseShade } from "../constants/colors"
import AppContext from "../context/AppContext"
import { createNoteService } from "../services/createNoteService"
import { updateNoteService } from "../services/updateNoteService"

export function NotesListScreen() {
	const { fetchedNotes, setShouldRefetch } = useContext(AppContext)
	const [noteTitle, setNoteTitle] = useState("")
	const [noteContent, setNoteContent] = useState("")
	const [loading, setLoading] = useState(false)
	const route = useRoute()

	const isArchiveScreen = route.params?.isArchive

	const handleAddNote = async () => {
		setLoading(true)
		const response = await createNoteService(noteTitle, noteContent)
		if (response) {
			// Clear input fields after successful note creation
			setNoteTitle("")
			setNoteContent("")
			setShouldRefetch((prev: boolean) => !prev)
		}
		setLoading(false)
	}

	const handleArchiveNote = async (note: Note) => {
		setLoading(true)
		const input = {
			id: note.id,
			archived: note.archived ? false : true,
		}
		const response = await updateNoteService(input)
		if (response) {
			setShouldRefetch((prev: boolean) => !prev)
		}
		setLoading(false)
	}
	// Filter unarchived notes, useMemo to optimize performance on larger lists
	const unarchivedNotes = useMemo(() => {
		return fetchedNotes.notes.filter((note: Note) => (isArchiveScreen ? note.archived : !note.archived))
	}, [fetchedNotes.notes])

	// loading state handling
	if (fetchedNotes.loading) {
		return <LtuSpinner />
	}
	return (
		<SafeAreaView style={styles.container}>
			<KeyboardAvoidingView
				behavior="position"
				keyboardVerticalOffset={64}
				style={styles.innerContainer}
			>
				{/* Error State handling, I'd like to use a toast here instead of that card*/}
				{fetchedNotes.error && (
					<LtuCard style={{ marginBottom: 20 }}>
						<LtuText>Error fetching notes</LtuText>
					</LtuCard>
				)}

				{/* Notes List */}
				<FlatList
					data={unarchivedNotes}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<LtuCard style={styles.noteCard}>
							<LtuIcon name="book" />
							<View style={{ flexShrink: 1 }}>
								<LtuTitle bold>{item.title}</LtuTitle>
								<LtuText>{item.content}</LtuText>
							</View>
							<View style={{ flex: 1 }} />
							<View style={{ alignItems: "flex-end" }}>
								<LtuButton
									variant={BUTTON_VARIANTS.PRIMARY}
									size="sm"
									style={styles.miniButton}
									onPress={() => {
										handleArchiveNote(item)
									}}
								>
									<LtuIcon
										name={isArchiveScreen ? "arrow-up-circle-outline" : "archive"}
										color={isArchiveScreen ? colors.ltuGreen : colors.ltuRed}
									/>
								</LtuButton>
								<LtuLabel>Wörter: 42</LtuLabel>
							</View>
						</LtuCard>
					)}
					contentContainerStyle={{ paddingVertical: 20 }}
					ListFooterComponent={
						!isArchiveScreen ? (
							<View style={styles.inputContainer}>
								<LtuHeadline style={{ marginBottom: 20, fontWeight: "bold" }}>Neue Notiz hinzufügen</LtuHeadline>
								<LtuLabel>Titel</LtuLabel>
								<LtuInput
									style={styles.input}
									value={noteTitle}
									onChangeText={setNoteTitle}
								/>
								<LtuLabel>Inhalt</LtuLabel>
								<LtuInput
									style={styles.input}
									value={noteContent}
									onChangeText={setNoteContent}
								/>
								<LtuButton
									variant={BUTTON_VARIANTS.PRIMARY}
									onPress={handleAddNote}
									isLoading={loading}
								>
									<LtuTitle
										bold
										style={{ color: colors.ltuWhite }}
									>
										Notiz hinzufügen
									</LtuTitle>
								</LtuButton>
							</View>
						) : null
					}
				/>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		backgroundColor: ltuRoseShade,
		paddingHorizontal: 20,
		justifyContent: "center",
	},
	input: {
		marginBottom: 20,
	},
	inputContainer: {
		marginBottom: 20,
		marginTop: 20,
		paddingTop: 20,
		borderTopWidth: 1,
		borderTopColor: colors.ltuBlue,
	},
	noteCard: {
		marginBottom: 10,
		flexDirection: "row",
		gap: 10,
		alignItems: "center",
	},
	miniButton: {
		width: 40,
		paddingVertical: 2,
		paddingHorizontal: 2,
	},
})
