const express = require('express');

const { getuserDataController, updateUserController, getPracticeDataController } = require('../controller/userController');
const { authMiddleware } = require('../middleware/authMiddleware');

const route = express.Router();

route.get('/get-data', authMiddleware, getuserDataController)
route.post('/update-user', authMiddleware, updateUserController)
route.get('/get-practice-userData', authMiddleware, getPracticeDataController)


module.exports = route;