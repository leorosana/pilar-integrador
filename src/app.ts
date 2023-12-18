import { config } from 'dotenv';
config();

import express from 'express';

import {router as placesRouter} from './routes/places.router'

import {errorHandler } from './middlewares/errorHandler'

import {connect} from './db/mongo'

const app = express()
const PORT = 3000

connect()

app.use(express.json())
app.use('/places', placesRouter)

app.use(errorHandler)

app.listen(PORT, () => {
    console.log('Servidor express con TS conectado en', PORT)
})
