import { createTypePokemonController,getAllTypesPokemonsController, getByIdTypePokemonController, getTypesPokemonsByPokemonController, updateTypePokemonController, deleteTypePokemonController } from '../../controllers/TypePokemon/typePokemonController'
import { Router } from "express";

const typePokemonRouter = Router();

typePokemonRouter.post("/types", createTypePokemonController);
typePokemonRouter.get("/types", getAllTypesPokemonsController);
typePokemonRouter.get("/types/:id", getByIdTypePokemonController);
typePokemonRouter.get("/pokemons/:name/types", getTypesPokemonsByPokemonController);
typePokemonRouter.put("/types/:id", updateTypePokemonController);
typePokemonRouter.delete("/types/:id", deleteTypePokemonController);

export default typePokemonRouter;