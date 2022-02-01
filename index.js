// const config = require('config')
// require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const itemRouter = require('./routes/item.routes')

const PORT = process.env.PORT || 8080
// config.get('serverPort')

app.use(cors())
app.use(express.json())
// app.use(express.static('static'))

app.use('/api', itemRouter)

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
