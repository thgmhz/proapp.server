const mongoose = require('mongoose')
const AppModel = require('./models/App')
// const Customer = require('./models/Customer')
// const Table = require('./models/Table')

mongoose.connect('mongodb://127.0.0.1/proapp', {
  useNewUrlParser: true,
  useCreateIndex: true,
})

module.exports = {
  AppModel,
}