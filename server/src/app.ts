import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRouter from './routes/User/userRoute'
import pokemonRouter from './routes/Pokemon/pokemonRoute'
import favoritePokemonRouter from './routes/FavoritePokemon/favoritePokemonRoute'
import typePokemonRouter from './routes/TypePokemon/typePokemonRoute'
import observationPokemonRouter from './routes/ObservationPokemon/observationRoute'


const app = express()

app.use(express.json())
app.use(cors());
app.use(bodyParser.json())
app.use(userRouter)
app.use(pokemonRouter)
app.use(observationPokemonRouter)
app.use(typePokemonRouter)
app.use(favoritePokemonRouter)


export { app }
