const express = require('express')
const router = express.Router();
const addFlightDetails = require('../controllers/flightController');


router.post("/addFlightDetails", addFlightDetails.addFlightDetails)
router.get("/getFlightDetails", addFlightDetails.getFlightDetails)


module.exports = router

