const express = require('express')
const router = express.Router()

const userRoutes = require('../routes/userRoute')
const flightRoutes = require('../routes/flightRoute')

router.use('/user', userRoutes)
router.use('/flight', flightRoutes)


module.exports = router 