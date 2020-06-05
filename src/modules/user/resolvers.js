const { combineResolvers } = require('graphql-resolvers')
const { UserInputError, AuthenticationError } = require('apollo-server')

const bcrypt = require('../../libraries/bcrypt')
const jwt = require('../../libraries/jwt')

const { isAuthenticated } = require('../../utility/authentication')

const userModel = require('./model')

const login = async (root, args, context) => {
    args.email = args.email.toLowerCase() // you should do that using schema directives

    const user = await userModel.findByEmail(args.email)

    if (!user) {
        throw new UserInputError("Invalid credentials")
    }

    const validLogin = await bcrypt.compare(args.password, user.password)
    if (!validLogin) {
        throw new UserInputError("Invalid credentials")
    }

    return await jwt.sign({ id: user.id, name: user.name, email: user.email })
}

const getMe = combineResolvers(
    isAuthenticated,
    async (root, args, context) => {
        return await userModel.findById(context.payload.id)
    }
)

const projects = async (user, args, context) => {
    /* block user to get another user's projects */
    if(user.id != context.payload.id) {
        return null
    }
    
    return await userModel.findProjectsByUserId(user.id)
}

module.exports = {
    login,
    getMe,
    projects
}
