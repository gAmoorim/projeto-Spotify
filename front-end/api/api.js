import axios from "axios"
import dotenv from "dotenv"
dotenv.conifg()

const URL = process.env.URL

const responseArtist = await axios.get(`${URL}/artists`)
const responseSongs = await axios.get(`${URL}/songs`)

export const artistArray = responseArtist.data
export const songsArray = responseSongs.data