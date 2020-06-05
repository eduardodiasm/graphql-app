const authFunctions = require("../utility/authentication")

module.exports = async ({ req, connection }) => {
    let context = {}

    let authHeader = req.headers["authorization"]
    if (authHeader) {
        context.token = authHeader
        context.payload = await authFunctions.decodeAuthHeader(authHeader)
    }

    context.variables = req.body.variables

    return context
}