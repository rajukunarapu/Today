// core packages
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// local modules
const authRouter = require('./routes/authRoutes')
const userRouter = require('./routes/userRoutes')

// express instance
const app = express();

// middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// routing
app.use('/auth',authRouter)
app.use('/user',userRouter)



module.exports = app;