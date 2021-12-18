const { getNotes } = require('./queries');
const { newNote, deleteNote } = require('./mutations');

// Define resolvers
const resolvers = {
	Query: {
		notes: getNotes,
	},
	Mutation: {
		newNote: newNote,
		deleteNote: deleteNote
	}
};

module.exports = resolvers;
