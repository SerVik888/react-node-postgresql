const Pool = require('pg').Pool

const pool = new Pool({
  user: 'postgres',
  password: '13000013',
  host: '*',
  port: 5432,
  database: 'node_postgres',
})

module.exports = pool
