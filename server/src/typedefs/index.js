const { gql } = require('apollo-server');

// Define type definitions for graphql
const typeDefs = gql`
	type Note {
		id: String!
		title: String!
		content: String!
	}

	type Query {
		notes: [Note!]!
	}

	type Mutation {
		newNote(title: String!, content: String!): [Note!]!
		deleteNote(id: String!): [Note!]!
	}
`;

module.exports = typeDefs;
