const express = require('express')
require('dotenv').config()
const breadRoutes = require('./controllers/breads_controllers')

const app = express()

app.use('/breads', breadRoutes)
app.set('views', _dirname + '/')

    app.get('/', (req, res) => {
    res.send("Welcome to BREAD!")
})

const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))




