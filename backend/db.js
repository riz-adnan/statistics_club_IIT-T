const mongoose=require('mongoose');
require('dotenv').config();
const connectToMongo =()=>{
    mongoose.connect("mongodb+srv://StatisticsClub:IITTirupati@statisticsclub.mcaxiqj.mongodb.net/").then(()=>{
        console.log('Connected to mongo successfully');
    }).catch((err)=>{
        console.log(err);
    })
        
    };

module.exports=connectToMongo;