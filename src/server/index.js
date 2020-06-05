const { ApolloServer } = require("apollo-server-express")

const typeDefs = require("./types")
const resolvers = require("./resolvers")
const extensions = require("./extensions")
const context = require("./contextCreation")

module.exports = new ApolloServer({
	typeDefs,
	resolvers,
	extensions,
	context,
	cors: {
        origin: '*',
        methods: ['GET', 'POST', 'OPTIONS'],
        preflightContinue: false
    },
	formatError: error => {
		return {
			code: error.extensions.code,
			message: error.message
		}
	},
	formatResponse: (response, req) => {
		return response
	},
	debug: process.env.NODE_ENV == 'development',
	tracing: false,
	introspection: process.env.NODE_ENV == 'development',
	playground: process.env.NODE_ENV == 'development'
})
