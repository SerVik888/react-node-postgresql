const Pool = require('pg').Pool

// const pool = new Pool({
//   user: 'postgres',
//   password: '13000013',
//   host: 'localhost',
//   port: 5432,
//   database: 'node_postgres',
// })
const pool = new Pool({
  user: 'qofzwhzftmefkv',
  password: '03a9c9bc2f038b315065489ca1b7568cd7f782451b017cabe6c201ee711be7c9',
  host: 'ec2-34-195-143-54.compute-1.amazonaws.com',
  port: 5432,
  database: 'db2tv4v43b7cf',
})

module.exports = pool
