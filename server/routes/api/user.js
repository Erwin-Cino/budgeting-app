const express = require('express')
const router = express.Router()
// controller
const controller = require('./user.controller')

router.get("/register", controller.registerUser)

