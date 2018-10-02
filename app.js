const express = require('express')
const logger = require('morgan')

const adminRouter = require('./routes/admin')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/admin', adminRouter)

module.exports = app
