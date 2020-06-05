require('dotenv').config()
const express = require('express')
const server = require('./server')

const app = express()

server.applyMiddleware({ app })

app.listen(process.env.PORT, () => {
  console.log(`# Server ready at PORT ${process.env.PORT} ${server.graphqlPath} #`)
})