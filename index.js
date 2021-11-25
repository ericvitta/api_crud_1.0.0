//config inicial
const mongoose = require('mongoose')
const express = require("express");
const app = express()
require('dotenv').config()


//forma de ler JSON / middlewares

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())





//rotas API
const personRoutes = require('./routes/personRouts')

app.use('/person', personRoutes)

//entregar uma porta para acesso
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
mongoose
    .connect(`mongodb+srv://ericvitta:eric2403@apicluster.rvpkn.mongodb.net/boncoapi?retryWrites=true&w=majority'
    `)
    .then(() => {
        console.log('Conectamos ao MongoDB!')
        app.listen(3000)
    })
    .catch((err) => console.log(err))
