const mysql = require('promise-mysql');

const config = {
  host: 'kravel.ckudumad3jrn.ap-northeast-2.rds.amazonaws.com',
  post: 3306,
  user: 'ooeunz',
  password: 'kravel123!',
  database: 'band'
}

module.exports = mysql.createPool(config);