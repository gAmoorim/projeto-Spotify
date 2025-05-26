import dotenv from "dotenv"
import { MongoClient } from "mongodb"
dotenv.config()

const URI = process.env.MONGODB_URI
const client = new MongoClient(URI)

await client.connect();

export const db = client.db("projetoSpotify")