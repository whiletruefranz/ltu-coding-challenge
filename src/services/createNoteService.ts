import { API, graphqlOperation } from 'aws-amplify'
import { createNote } from '../graphql/mutations'

export const createNoteService = async (title: string, content: string = '') => {
    try {
        const response = await API.graphql(graphqlOperation(createNote, {
            input: {
                title,
                content
            }
        }))
        console.log('✅ Note created:', response)
        return response
    } catch (error) {
        console.error('❌ Error creating note:', error)
        throw error
    }
}
