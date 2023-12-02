import express from "express";
import * as config from "./appSettings/config.json";


const app = express();
const port = config.server.port;




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
