import express from "express";
import * as config from "./appSettings/config.json";
import {ConecteDatabase, CreateDatabase} from "./mySQLDatabase"
import {CommandLineParser} from "./commandLineParser"

const args = new CommandLineParser(process.argv);
console.log(args.WithNewDatabase)

const app = express();
const port = config.server.port;





app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
