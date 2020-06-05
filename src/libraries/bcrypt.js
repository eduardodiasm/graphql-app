const bcrypt = require('bcryptjs')

const functions = {
    hash: text => {
        let saltRounds = 10
        return bcrypt.hash(text, saltRounds)
    },
    compare: (text, hash) => {
        return bcrypt.compare(text, hash)
    }
}

module.exports = functions