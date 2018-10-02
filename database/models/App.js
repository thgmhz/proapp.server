const db = require('mongoose')
const Schema = db.Schema

const schemaName = 'App'

const schema = new Schema({
  name: String,
  url: String,
  tags: Array,
  created_at: Date,
  updated_at: Date
})

module.exports = db.model(schemaName, schema, 'appstore')