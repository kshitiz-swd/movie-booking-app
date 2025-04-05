const express = require('express')

const userRouter = express.Router()
const {signup, login, logout, bookshow, coupons} = require('../controllers/user.controller')

userRouter.post('/auth/signup', signup)

userRouter.post('/auth/login', login)

userRouter.post('/auth/logout', logout)

userRouter.post('/auth/bookings', bookshow)

userRouter.get('/auth/coupons', coupons)

module.exports = userRouter