import express from "express";
import * as config from "./appSettings/config.json";
import {ConnectDatabase} from "./mySQLDatabase"
import {CommandLineParser} from "./commandLineParser"


const app = express();
const port = config.server.port;

ConnectDatabase("localhost","root","Acv1235264852",3306,"PWM");



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


