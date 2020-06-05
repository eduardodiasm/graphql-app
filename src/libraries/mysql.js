const knex = require('knex')

const mysql = knex({
    client: 'mysql',
    connection: {
        host : process.env.MYSQL_HOST,
        user : process.env.MYSQL_USER,
        password : process.env.MYSQL_PASSWD,
        database : process.env.MYSQL_DB
    }
})
console.log(`New mysql connection to ${process.env.MYSQL_HOST}`)

module.exports = mysql