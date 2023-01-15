import { Application, Request, Response } from "express";

const express = require('express');
const dotenv = require('dotenv');


const app: Application = express();
app.use(express.json())
app.use(express.urlencoded({ extends:true }))
dotenv.config();
const port = process.env.PORT;

app.get('/', async (req:Request, res:Response) => {
  res.send("Hello World")
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});