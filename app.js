import bodyParser from "body-parser";
import express from "express";
import eventsRoutes from "./routes/events.js";

const app = express();

app.use(bodyParser.json());

app.use(eventsRoutes);

app.listen(process.env.PORT);

