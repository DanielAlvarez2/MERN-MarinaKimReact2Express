const express = require('express')
router = express.Router()
usersRoute = require('../controllers/usersControllers.js')

router.get('/', usersRoute.usersController)

module.exports = router