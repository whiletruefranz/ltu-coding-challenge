import { API, graphqlOperation } from "aws-amplify"
import { UpdateNoteInput } from "../API"
import { updateNote } from "../graphql/mutations"

export const updateNoteService = async (input: UpdateNoteInput) => {
	try {
		const response = await API.graphql(
			graphqlOperation(updateNote, {
				input: {
					...input,
				},
			})
		)
		console.log("✅ Note updated:", response)
		return response
	} catch (error) {
		console.error("❌ Error updating note:", error)
		throw error
	}
}
