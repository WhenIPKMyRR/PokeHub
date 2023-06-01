import { Request, Response } from "express";
import { createTypePokemon, getAllTypesPokemons, getByIdTypePokemon, getTypesPokemonsByPokemon, updateTypePokemon, deleteTypePokemon } from "../../services/typePokemonServices";

export const createTypePokemonController = async (req: Request, res: Response) => {
    try {
        const typePokemonData = req.body;

        if (!typePokemonData.name) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        const createdTypePokemon = await createTypePokemon(typePokemonData)

        if (createdTypePokemon) {
            res.status(201).json({
                message: "TypePokemon criado com sucesso!",
                data: createdTypePokemon
            })
        } else {
            res.status(400).json({
                message: "Erro ao criar typePokemon!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getAllTypesPokemonsController = async (req: Request, res: Response) => {
    try {
        const typesPokemons = await getAllTypesPokemons()

        if (typesPokemons) {
            res.status(200).json({
                message: "TypesPokemons encontrados com sucesso!",
                data: typesPokemons
            })
        } else {
            res.status(404).json({
                message: "Nenhum typePokemon encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getByIdTypePokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const typePokemonId = parseInt(id);

        const typePokemon = await getByIdTypePokemon(typePokemonId)

        if (typePokemon) {
            res.status(200).json({
                message: "TypePokemon encontrado com sucesso!",
                data: typePokemon
            })
        } else {
            res.status(404).json({
                message: "TypePokemon não encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getTypesPokemonsByPokemonController = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;

        const typesPokemons = await getTypesPokemonsByPokemon(name)

        if (typesPokemons) {
            res.status(200).json({
                message: "TypesPokemons encontrados com sucesso!",
                data: typesPokemons
            })
        } else {
            res.status(404).json({
                message: "Nenhum typePokemon encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const updateTypePokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const typePokemonId = parseInt(id);

        const typePokemonData = req.body;

        const updatedTypePokemon = await updateTypePokemon(typePokemonId, typePokemonData)

        if (updatedTypePokemon) {
            res.status(200).json({
                message: "TypePokemon atualizado com sucesso!",
                data: updatedTypePokemon
            })
        } else {
            res.status(404).json({
                message: "TypePokemon não encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }

}

export const deleteTypePokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const typePokemonId = parseInt(id);

        const deletedTypePokemon = await deleteTypePokemon(typePokemonId)

        if (deletedTypePokemon) {
            res.status(200).json({
                message: "TypePokemon deletado com sucesso!",
                data: deletedTypePokemon
            })
        } else {
            res.status(404).json({
                message: "TypePokemon não encontrado!",
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }

}