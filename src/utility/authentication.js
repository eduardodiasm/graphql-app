const { AuthenticationError } = require('apollo-server')
const { skip } = require('graphql-resolvers')
const jwt = require("../libraries/jwt")

const decodeAuthHeader = async (authorizationHeader) => {
    if (!authorizationHeader) {
        throw new AuthenticationError("Invalid token")
    }
    
    let data = authorizationHeader.split(' ')
    if (data[0] != 'Bearer' || !data[1]) {
        throw new AuthenticationError("Invalid token")
    }

    let payload = decodeToken(data[1])

    return payload
}

const decodeToken = token => {
    return jwt.decode(token)
}

const isAuthenticated = (root, args, context) => {
    if(!context.payload || !context.payload.id || context.payload.admin)
        throw new AuthenticationError('Not authenticated')

    skip
}

module.exports = {
    decodeAuthHeader,
    decodeToken,
    isAuthenticated
}