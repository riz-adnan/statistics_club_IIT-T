const express=require('express');

var cors = require('cors') 
const connectToMongo = require('./db');
require('dotenv').config()
const app = express()
const port = process.env.port

connectToMongo();
app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/blogs', require('./routes/blogs'))
app.use('/api/events', require('./routes/events'))
app.use('/api/archive', require('./routes/archive'))

app.listen(port, ()=>{
    console.log(`The backend is running on port ${port}`)
})