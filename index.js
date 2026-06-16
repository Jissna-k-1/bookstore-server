// import dns from 'node:dns';
const dns = require('dns')
dns.setServers(['8.8.8.8', '1.1.1.1'])




// import express from 'express'
// import cors from "cors"
// import 'dotenv/config'
// import connectDB from './config/mongodb.js'
// import connectCloudinary from './config/cloudinary.js';
// import userRouter from './routes/userRoute.js';

// import express, dotenv, cors
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./routes/routing')
require('./config/db')

// create a server using express
const bookstoreServer = express()

// enable cors in express server
bookstoreServer.use(cors())

// add json parser to server
bookstoreServer.use(express.json())

// use router in server
bookstoreServer.use(router)

// create a port
const PORT = 3000

// server listen in that port
bookstoreServer.listen(PORT,()=>{
    console.log("Bookstore Server Started and waiting for client request");   
})

// resolve http get request to http://localhost:3000/ using server
bookstoreServer.get('/',(req,res)=>{
    res.status(200).send('<h1>Bookstore Server Started and waiting for client request</h1>')
})