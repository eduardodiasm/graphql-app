const mysql = require('../../libraries/mysql')

const findById = id => {
	return mysql.from('user').where({ id }).first()
}

const findByEmail = email => {
	return mysql.from('user').where({ email }).first()
}

const findProjectsByUserId = created_by => {
	return mysql.from('project').where({ created_by })
}

module.exports = {
	findById,
	findByEmail,
	findProjectsByUserId
}