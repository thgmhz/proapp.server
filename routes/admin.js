const express = require('express')
const AppController = require('../controllers/App')
const router = express.Router()

router.post('/app/add', AppController.add)

module.exports = router
