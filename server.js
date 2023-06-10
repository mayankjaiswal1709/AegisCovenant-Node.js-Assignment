const express = require('express')
const app = express()
require('dotenv').config()
require('./models/config')
const mainroutes = require('./routes/mainRoute')

app.use(express.json());
app.use('/', mainroutes)


app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
});