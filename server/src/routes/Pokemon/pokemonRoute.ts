import { createrPokemonController, getAllPokemonsController, getByIdPokemonController,getPokemonsByTypeController, getByNamePokemonController, getPokemonsByUserController, updatePokemonController, deletePokemonController,  } from "../../controllers/Pokemon/pokemonController";
import { Router } from "express";

const pokemonRouter = Router();

pokemonRouter.post("/pokemons", createrPokemonController);
pokemonRouter.get("/pokemons", getAllPokemonsController);
pokemonRouter.get("/pokemons/:name", getByNamePokemonController);
pokemonRouter.get("/pokemons/:id", getByIdPokemonController);
pokemonRouter.get("/types/:type/pokemons", getPokemonsByTypeController);
pokemonRouter.get("/users/:id/pokemons", getPokemonsByUserController);
pokemonRouter.put("/pokemons/:id", updatePokemonController);
pokemonRouter.delete("/pokemons/:id", deletePokemonController);

export default pokemonRouter