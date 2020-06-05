const schemaDefinition = require("./schema")

const userTypes = require("../modules/user").def
const projectTypes = require("../modules/project").def

const types = [
    schemaDefinition,
    userTypes,
    projectTypes,
    /* require and add here all other modules type defs */
]

module.exports = types