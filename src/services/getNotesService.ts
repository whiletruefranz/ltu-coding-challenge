import { GraphQLResult } from "@aws-amplify/api-graphql"
import { API } from "aws-amplify"
import { ListNotesQuery } from "../API"
import { listNotes } from "../graphql/queries"

export const getNotesService = async (): Promise<GraphQLResult<ListNotesQuery> | undefined> => {
	try {
		const result = (await API.graphql({
			query: listNotes,
			authMode: "AMAZON_COGNITO_USER_POOLS" as any,
		})) as GraphQLResult<ListNotesQuery>
		return result
	} catch (error) {
		console.error("Error fetching notes:", error)
		return undefined
	}
}
