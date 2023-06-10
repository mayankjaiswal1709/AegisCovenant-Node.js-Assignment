const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.URL, { useNewUrlParser: true });
const connection = mongoose.connection;
// mongoose.set("strictQuery", false);
connection.once('open', () => {
    console.log("Your mongoDB is connected successfuly");
})