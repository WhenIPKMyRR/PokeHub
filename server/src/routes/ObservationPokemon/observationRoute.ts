import { createObservationPokemonController, getAllObservationsPokemonsController, getByIdObservationPokemonController, getObservationsPokemonByPokemonController, updateObservationPokemonController, deleteObservationPokemonController } from "../../controllers/ObservationPokemon/observationPokemonController";
import { Router } from "express";

const observationPokemonRouter = Router();

observationPokemonRouter.post("/observations", createObservationPokemonController);
observationPokemonRouter.get("/observations", getAllObservationsPokemonsController);
observationPokemonRouter.get("/observations/:id", getByIdObservationPokemonController);
observationPokemonRouter.get("/pokemons/:id/observations", getObservationsPokemonByPokemonController);
observationPokemonRouter.put("/observations/:id", updateObservationPokemonController);
observationPokemonRouter.delete("/observations/:id", deleteObservationPokemonController);

export default observationPokemonRouter;