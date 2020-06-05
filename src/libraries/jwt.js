const jwt = require('jsonwebtoken')

const secret = process.env.JWT_SECRET

const functions = {
    sign: (payload, expiration = false) => {
        return expiration ?
            jwt.sign(payload, secret, { expiresIn: expiration })
        :
            jwt.sign(payload, secret)
    },
    decode: (token) => {
        try {
            return jwt.verify(token, secret)
        } catch (e) {
            console.log(`JWT ERROR TRYING TO DECODE ${token} : ${e}`)
            return null
        }
    }
}

module.exports = functions