// also can do - require('dotenv').config({path:'./env'});

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import {app} from "./app.js"

// dotenv
dotenv.config({
    path: './.env',
})

//db connected
connectDB()
.then(()=>{
    // listen for error
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
    })

    //connected server
    app.listen(process.env.PORT||8000, ()=>{
        console.log(`server running at port: ${process.env.PORT}`);
    })
})
.catch((err) =>{
    console.log("MONGO db connection failed!", err);
})