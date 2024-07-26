import express, { Application, Request, Response } from "express";
import { triggerSync } from "./controllers/syncController";

const app: Application = express();

app.use(express.json());

app.post("/trigger-sync", triggerSync);

export default app;
