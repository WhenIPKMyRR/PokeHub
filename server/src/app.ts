import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/User/userRoute'
import pokemonRouter from './routes/Pokemon/pokemonRoute'
import observationRouter from './routes/Observation/observationRoute'


const app = express()

app.use(express.json())
app.use(cors());
app.use(bodyParser.json())
app.use(userRouter)
app.use(pokemonRouter)
app.use(observationRouter)


export { app }
