import { Request, Response } from "express";
import { createFavoritePokemon, getAllFavoritePokemon, getByIdFavoritePokemon, getFavoritePokemonByUser, deleteFavoritePokemon } from "../../services/favoritePokemonServices";

export const createFavoritePokemonController = async (req: Request, res: Response) => {
    try {
        const favoritePokemonData = req.body;

        if (!favoritePokemonData.userId || !favoritePokemonData.pokemonId) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        const createdFavoritePokemon = await createFavoritePokemon(favoritePokemonData)

        if (createdFavoritePokemon) {
            res.status(201).json({
                message: "FavoritePokemon criado com sucesso!",
                data: createdFavoritePokemon
            })
        } else {
            res.status(400).json({
                message: "Erro ao criar favoritePokemon!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getAllFavoritePokemonsController = async (req: Request, res: Response) => {
    try {
        const favoritePokemons = await getAllFavoritePokemon()

        if (favoritePokemons) {
            res.status(200).json({
                message: "FavoritePokemons encontrados com sucesso!",
                data: favoritePokemons
            })
        } else {
            res.status(404).json({
                message: "Nenhum favoritePokemon encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getByIdFavoritePokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const favoritePokemonId = parseInt(id);

        if(isNaN(favoritePokemonId)){
            return res.status(400).json({
                message: "Id inválido! O ID deve ser um número."
            });
        }

        const favoritePokemon = await getByIdFavoritePokemon(favoritePokemonId)

        if (favoritePokemon) {
            res.status(200).json({
                message: "FavoritePokemon encontrado com sucesso!",
                data: favoritePokemon
            })
        } else {
            res.status(404).json({
                message: "Nenhum favoritePokemon encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getFavoritePokemonByUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const favoritePokemonId = parseInt(id);

        if(isNaN(favoritePokemonId)){
            return res.status(400).json({
                message: "Id inválido! O ID deve ser um número."
            });
        }

        const favoritePokemon = await getFavoritePokemonByUser(favoritePokemonId)

        if (favoritePokemon) {
            res.status(200).json({
                message: "FavoritePokemon encontrado com sucesso!",
                data: favoritePokemon
            })
        } else {
            res.status(404).json({
                message: "Nenhum favoritePokemon encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const deleteFavoritePokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const favoritePokemonId = parseInt(id);

        if(isNaN(favoritePokemonId)){
            return res.status(400).json({
                message: "Id inválido! O ID deve ser um número."
            });
        }

        const deletedFavoritePokemon = await deleteFavoritePokemon(favoritePokemonId)

        if (deletedFavoritePokemon) {
            res.status(200).json({
                message: "FavoritePokemon deletado com sucesso!",
                data: deletedFavoritePokemon
            })
        } else {
            res.status(404).json({
                message: "Nenhum favoritePokemon encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}


