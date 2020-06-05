const userResolvers = require('./resolvers')

const def = `
    type User {
        id: Int
        name: String
        created_at: Date
        projects: [Project]
    }
`

const queries = {
    getMe: userResolvers.getMe
}

const mutations = {
    login: userResolvers.login
}

const typeResolvers = {
    projects: userResolvers.projects
}

module.exports = { def, queries, mutations, typeResolvers }