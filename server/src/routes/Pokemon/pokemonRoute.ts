import { createrPokemonController, getAllPokemonsController, getByIdPokemonController, updatePokemonController, deletePokemonController } from "../../controllers/Pokemon/pokemonController";
import { Router } from "express";

const pokemonRouter = Router();

pokemonRouter.post("/pokemon/create", createrPokemonController);
pokemonRouter.get("/pokemon/all", getAllPokemonsController);
pokemonRouter.get("/pokemon/:id", getByIdPokemonController);
pokemonRouter.put("/pokemon/update/:id", updatePokemonController);
pokemonRouter.delete("/pokemon/delete/:id", deletePokemonController);

export default pokemonRouter