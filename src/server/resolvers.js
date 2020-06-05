const userTypes = require("../modules/user")

const customTypes = require("./customTypes")

const queries = {
	...userTypes.queries,
	/* require and add here all other modules queries */
}

const mutations = {
	...userTypes.mutations,
	/* require and add here all other modules mutations */
}

const typeResolvers = {
	User: userTypes.typeResolvers,
	/* require and add here all other modules type resolvers */
}

module.exports = {
	...customTypes,
	...typeResolvers,
	Query: queries,
	Mutation: mutations
}