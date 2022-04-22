import express, { Request, Response } from 'express';
import cors from 'cors';
import tarea from '../routes/tareaRouter'


const server = express();
server.use(express.json());

server.use(cors());



server.use('/api/tarea', tarea);


export default server;
