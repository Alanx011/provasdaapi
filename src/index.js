//gabriel gonçalves da silva

import 'dotenv/config'
import express from "express";
import cors from 'cors'
import endpoints from './endpoints.js'

const server = express();
server.use(cors());
server.use(express.json());
server.use(endpoints);


server.listen(process.env.PORT,() => console.log(`API online na porta ${process.env.PORT}`));