const moment = require('moment')
const { GraphQLScalarType } = require('graphql/type')

const Date = new GraphQLScalarType({
    name: 'Date',
    parseValue: value => moment(value).format('DD/MM/YYYY'),
    serialize: value => moment(value).format('DD/MM/YYYY'),
    parseLiteral: () => null
})

const Datetime = new GraphQLScalarType({
    name: 'Datetime',
    parseValue: value => moment(value).format('DD/MM/YYYY HH:mm'),
    serialize: value => moment(value).format('DD/MM/YYYY HH:mm'),
    parseLiteral: () => null
})

module.exports = { Date, Datetime }