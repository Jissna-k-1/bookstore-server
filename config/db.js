const mongoose = require('mongoose')

// get connection string from .env file
const connectionString = process.env.ATLASDBCONNECTION
mongoose.connect(connectionString).then(res=>{
    console.log("MongoDB connection Succesfull")
}).catch(err=>{
    console.log("MongoDB connection Failed!!");
    console.log(err);
})