// Import modules from node_modules
import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";

// Import from other .ts files
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(async () => {
    // Create express app
    const app = express();

    // Using third party middleware
    app.use(bodyParser.json());
    app.use(cors());

    // Routes go here
    
    // Starts server and listens on port 3001 for connections
    app.listen(3001);
})
