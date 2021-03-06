const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5050

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalroutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on ${port}`))