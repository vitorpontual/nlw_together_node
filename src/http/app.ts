import "reflect-metadata"
import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';

import "../database"
import { router } from "./routes";
import { AppError } from "../errors/AppError";

// código 1ºtogether, 2ºunidade, 3ºembuscadaevolução, 4º legacy, 5º

const app = express();

app.use(express.json())
app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError ) { 
    return response.status(400).json({
      error: err.message
    })
  }

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error"
  })
})

export  { app }