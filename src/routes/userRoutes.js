const express = require('express');

const { getuserDataController, updateUserController } = require('../controller/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const route = express.Router();

route.get('/get-data', authMiddleware, getuserDataController)
route.post('/update-user', authMiddleware, updateUserController)


module.exports = route;