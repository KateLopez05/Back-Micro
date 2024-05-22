const express = require('express')
const {MongoConection} = require('./database/config')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express()

MongoConection()

app.use(
    cors({
        origin: '*'
    })
)

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const proyecto = require('./routes/proyectoRoute')

app.use('/api/v1/proyecto', proyecto)

app.get("*", (req, res) => {
    return res.status(404).json({
        mensagge: 'No encontrado',
        status: 404
    })
})

module.exports = app