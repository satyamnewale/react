// also can do - require('dotenv').config({path:'./env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";

// dotenv
dotenv.config({
    path: './env',
})

//db connected
connectDB();