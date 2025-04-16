const express = require('express');

const { singUpController, signInController, logOutController } = require('../controller/authController');

const route = express.Router();

route.post('/signUp',singUpController)
route.post('/signIn',signInController)
route.get('/logout', logOutController)


module.exports = route;