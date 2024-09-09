import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

import mongoose from 'mongoose'
import createRouter from './routes/create.route.js';
import updateRouter from './routes/create.route.js';
import deleteRouter from './routes/create.route.js';
import { test } from './controllers/test.controll.js';

dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{console.log('mongodb is connected')}).catch((error)=>{console.log(error.message)})
const app = express()
const PORT = 3006

app.use(express.json());
app.use(cors());

app.listen(PORT, ()=>{
    console.log(`${PORT}'api is connected'`)

})

app.use('/api/test', test)
app.use('/api/create', createRouter);
// app.use('/api/create', createRouter);
app.use('/api/update', updateRouter);
app.use('/api/delete', deleteRouter);
