import express from "express";
import bodyParser, { json } from "body-parser";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import connectDB from './config/connectDB'
require('dotenv').config();
let app = express();
//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


configViewEngine(app);
initWebRoutes(app);
connectDB();
let port = process.env.PORT || 6969;
//port === undefined => port = 6969
app.listen(port, () => {
    //call back
    console.log("Backend Node js is running on the port" + port)
});