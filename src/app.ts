import express from 'express';
import {router as placesRouter} from './routes/places.router'

const app = express()
const PORT = 3000

app.use(express.json())
app.use('/places', placesRouter)

app.listen(PORT, () => {
    console.log('Servidor express con TS conectado en', PORT)
})
