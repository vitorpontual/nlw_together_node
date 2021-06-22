import "reflect-metadata"
import express from 'express';

import "./database"
import { router } from "./routes";

// código 1ºtogether, 2º

const app = express();

app.use(express.json())
app.use(router)

export  { app }