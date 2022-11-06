import express, { Express, Request, Response, NextFunction } from "express";
import cors from 'cors';
import appRouter from './router'
import { connectDB } from './db';
import config from "./config";

connectDB();

const app: Express = express();

app.use(express.json());
app.use(cors());

appRouter(app);

app.listen(config.appPort, () => console.log(`app is running on http://localhost:${config.appPort}`));