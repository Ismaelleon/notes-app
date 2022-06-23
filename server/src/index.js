const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./typedefs/index');
const resolvers = require('./resolvers/index');
const app = require('./app');

// Connect to database
mongoose.connect('mongodb://localhost:27017/notes')

// Initialize apollo server
const server = new ApolloServer({
	typeDefs,
	resolvers
});

// Listen and log the client url
let port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`client running on port ${port}`)
})

// Listen and log the server url
server.listen().then(({ url }) => {
	console.log(`server ready at ${url}`)
})
