const express = require('express');

const { getuserDataController } = require('../controller/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const route = express.Router();

route.get('/get-data',authMiddleware, getuserDataController)


module.exports = route;