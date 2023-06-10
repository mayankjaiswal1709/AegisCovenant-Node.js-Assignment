const mongoose = require("mongoose")

const flightSchema = mongoose.Schema({
    source: {
        type: String,
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    flights: [

        {
            flightName: {
                type: String,
                // required: true
            },
            flightPrice: {
                type: String,
                // required: true
            },
            availableDates:
            {
                type: String,
                // required: true
            }

        }

    ]
})

module.exports = mongoose.model("flight", flightSchema)