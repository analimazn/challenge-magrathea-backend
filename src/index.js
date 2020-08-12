require('dotenv').config()

const path = require('path')
const express = require('express')
const routes = require('./routes')
const cors = require('cors')

const app = express()

app.use(cors({ origin: '*' }))
app.use('/static', express.static(path.join(__dirname, '../logos')))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3000) 