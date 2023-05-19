import express from 'express'
import userRouter from './routes/User/userRoute'
import pokemonRouter from './routes/Pokemon/pokemonRoute'
import observationRouter from './routes/Observation/observationRoute'


const app = express()

app.use(express.json())
app.use(userRouter)
app.use(pokemonRouter)
app.use(observationRouter)


export { app }
