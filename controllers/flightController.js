const flightSchema = require("../models/flightSchema")

const addFlightDetails = async (req, res) => {
    try {
        const { source, destination, flightName, flightPrice, availableDates } = req.body;
        const flight = { flightName, flightPrice, availableDates };
        let existFlight = await flightSchema.findOne({ source, destination });

        if (existFlight) {
            existFlight.flights.push(flight);
            await existFlight.save();
            return res.status(200).send({ success: true, message: "Flight added successfully", flight: existFlight });
        }

        const newFlight = new flightSchema({ source, destination });
        newFlight.flights.push(flight);
        await newFlight.save();

        res.status(200).send({ success: true, message: "Flight details added successfully", flight: newFlight });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, error: error });
    }
}

const getFlightDetails = async (req, res) => {
    try {
        const { source, destination, date } = req.body;
        const flight = await flightSchema.findOne({ source, destination })
        // console.log(flight.flights)
        const matchingFlights = flight.flights.filter(flight => flight.availableDates === date);
        res.status(200).send({ success: true, message: "flight details added successfully", flight: matchingFlights })
    } catch (error) {
        console.log(error)
        res.status(500).send({ success: false, error: error })
    }
}
module.exports = { addFlightDetails, getFlightDetails }