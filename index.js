require('dotenv').config()
const express = require('express')
const itemRouter = require('./routes/item.routes')
const cors = require('cors')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', itemRouter)

app.listen(PORT, () => console.log(`server started on post ${PORT}`))