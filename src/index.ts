import express from "express";
import * as config from "./appSettings/config.json";
import {ConnectDatabase} from "./mySQLDatabase"
import {CommandLineParser} from "./commandLineParser"


const app = express();
const port = config.server.port;

const commands = new CommandLineParser(process.argv.slice(2))

ConnectDatabase(commands.DatabaseUrl,commands.DatabaseUser,commands.DatabasePassword,commands.DatabasePort,commands.DatabaseName);

 

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });


