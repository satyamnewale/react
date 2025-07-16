import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use used for middlewares mostly

// cross origin rendering done
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

//accepting json
app.use(express.json());

//data comming from url to configure
app.use(express.urlencoded({extended:true}));

//for file keep in public folder
app.use(express.static("public"));

//to access cookies from user through server ( secure)
app.use(cookieParser());


//routes import
import userRouter from "./routes/user.routes.js" ;
//router declaration
app.use("/api/v1/users", userRouter);

export {app};