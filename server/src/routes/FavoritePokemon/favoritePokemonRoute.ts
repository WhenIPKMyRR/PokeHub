import { Router } from "express";
import {createFavoritePokemonController, getAllFavoritePokemonsController, getByIdFavoritePokemonController, getFavoritePokemonByUserController, deleteFavoritePokemonController} from "../../controllers/FavoritePokemon/favoritePokemonController"

const favoritePokemonRouter = Router();

favoritePokemonRouter.post("/favorites", createFavoritePokemonController);
favoritePokemonRouter.get("/favorites", getAllFavoritePokemonsController);
favoritePokemonRouter.get("/favorites/:id", getByIdFavoritePokemonController);
favoritePokemonRouter.get("/users/:id/favorites", getFavoritePokemonByUserController);
favoritePokemonRouter.delete("/favorites/:id", deleteFavoritePokemonController);

export default favoritePokemonRouter;