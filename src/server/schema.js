module.exports = `
    schema {
        query: Query
        mutation: Mutation
    }

    scalar Date
    scalar Datetime

    type Query {
        getMe: User
    }

    type Mutation {
        login(email: String!, password: String!): String
    }
`