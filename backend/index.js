const express=require('express');
const path=require('path')
var cors = require('cors') 
const connectToMongo = require('./db');
require('dotenv').config()
const app = express()
const port = process.env.port

connectToMongo();
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,'./../build')))

app.use('/api/auth', require('./routes/auth'))
app.use('/api/blogs', require('./routes/blogs'))
app.use('/api/events', require('./routes/events'))
app.use('/api/archive', require('./routes/archive'))

app.use('*', function(req,res){
    res.sendFile(path.join(__dirname,'./../build/index.html'))
    
  })

app.listen(port, ()=>{
    console.log(`The backend is running on port ${port}`)
})