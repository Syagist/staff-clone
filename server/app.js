require('dotenv').config()
const express = require('express');
const fileUpload = require('express-fileupload')
const sequelize = require('./db')
const cors = require('cors')
const {resolve} = require("path");
const router= require('./routes/index')

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.static(resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {
            console.log(`Listen port ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
