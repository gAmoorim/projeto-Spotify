import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import { db } from "./connect.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors())

app.get('/', (request, response) => {
    response.send('Ola tropa')
})

app.get('/artists', async (request, response) => {
    response.send(await db.collection('artists').find({}).toArray())
})

app.get('/songs', async (request, response) => {
    response.send(await db.collection('songs').find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando a porta ${PORT}`)
})