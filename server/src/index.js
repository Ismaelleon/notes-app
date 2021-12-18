const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./typedefs/index');
const resolvers = require('./resolvers/index');

// Connect to database
mongoose.connect('mongodb://localhost:27017/notes')

// Initialize apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers
});

// Listen and log the server url
server.listen().then(({ url }) => {
	console.log(`server ready at ${url}`)
})
