const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: '13000013',
  host: 'damp-coast-50929.herokuapp.com',
  port: 5432,
  database: 'node_postgres',
})

module.exports = pool
