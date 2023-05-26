import { createPokemon, getAllPokemons, getByIdPokemon, getPokemonsByType, getPokemonsByUser, updatePokemon, deletePokemon} from '../../services/pokemonServices'
import { Request, Response } from "express";

export const createrPokemonController = async (req: Request, res: Response) => {
    try {
        const pokemonData = req.body;

        if (!pokemonData.name || !pokemonData.type || !pokemonData.password) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        const createdPokemon = await createPokemon(pokemonData)

        if(createdPokemon){
            res.status(201).json({
                message: "Pokemon criado com sucesso!",
                data: createdPokemon
            })
        }else{
            res.status(400).json({
                message: "Erro ao criar pokemon!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getAllPokemonsController = async (req: Request, res: Response) => {
    try {
        const pokemons = await getAllPokemons()

        if(pokemons){
            res.status(200).json({
                message: "Pokemons encontrados com sucesso!",
                data: pokemons 
            })
        }else{
            res.status(404).json({
                message: "Nenhum pokemon encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getByIdPokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const pokemonId = parseInt(id); 

        if (isNaN(pokemonId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const pokemon = await getByIdPokemon(pokemonId)

        if(pokemon){
            res.status(200).json({
                message: "Pokemon encontrado com sucesso!",
                data: pokemon
            });
        }else{
            res.status(404).json({
                message: "Pokemon não encontrado!",
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }
}

export const getPokemonsByTypeController = async (req: Request, res: Response) => {
    try {
        const { type } = req.query;

        const pokemons = await getPokemonsByType(type as string);

        if(pokemons){
            res.status(200).json({
                message: "Pokemon encontrado com sucesso!",
                data: pokemons
            });
        }else{
            res.status(404).json({
                message: "Pokemon não encontrado!",
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }
}

export const getPokemonsByUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const userID = parseInt(id); 

        if (isNaN(userID)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const pokemons = await getPokemonsByUser(userID)

        if(userID){
            res.status(200).json({
                message: "Pokemon encontrado com sucesso!",
                data: pokemons
            });
        }else{
            res.status(404).json({
                message: "Pokemon não encontrado!",
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }

}
export const updatePokemonController = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const pokemonData = req.body;
  
      const pokemonId = parseInt(id);
  
      if (isNaN(pokemonId)) {
        res.status(400).json({
          message: "ID inválido! O ID deve ser um número.",
        });
        return;
      }
  
      const updatedPokemon = await updatePokemon(pokemonId, pokemonData);
  
      if (updatedPokemon) {
        res.status(200).json({
          message: "Pokemon atualizado com sucesso!",
          data: updatedPokemon,
        });
      } else {
        res.status(404).json({
          message: "Pokemon não encontrado!",
        });
      }
    } catch (error) {
      res.status(500).json({
        message: "Erro interno do servidor!",
        error,
      });
    }
  }

export const deletePokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const pokemonId = parseInt(id); 

        if (isNaN(pokemonId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const deletedPokemon = await deletePokemon(pokemonId)

        if(deletedPokemon){
            res.status(200).json({
                message: "Pokemon deletado com sucesso!",
                data: deletedPokemon
            });
        }else{
            res.status(404).json({
                message: "Pokemon não encontrado!",
            });
        }
    } catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        });
    }
}