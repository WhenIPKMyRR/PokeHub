import { ObservationPokemon } from "@prisma/client";
import { createObservation,getAllObservation, getByIdObservation,getObservationsPokemonByPokemon, updateObservation, deleteObservation} from "../../services/observationPokemonServices";
import { Request, Response } from "express";

export const createObservationPokemonController = async (req: Request, res: Response) => {
    try {
        const observationData: ObservationPokemon = req.body;

        if (!observationData.userId || !observationData.pokemonId || !observationData.description) {
            return res.status(400).json({
                message: "Todos os campos devem ser preenchidos!"
            });
        }

        const createdObservation = await createObservation(observationData)

        if(createdObservation){
            res.status(201).json({
                message: "Observation criado com sucesso!",
                data: createdObservation
            })
        }else{
            res.status(400).json({
                message: "Erro ao criar observation!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getAllObservationsPokemonsController = async (req: Request, res: Response) => {
    try {
        const observations = await getAllObservation()

        if(observations){
            res.status(200).json({
                message: "Observations encontrados com sucesso!",
                data: observations 
            })
        }else{
            res.status(404).json({
                message: "Nenhum observation encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getByIdObservationPokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const observationId = parseInt(id); 

        if (isNaN(observationId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const observation = await getByIdObservation(observationId)

        if(observation){
            res.status(200).json({
                message: "Observation encontrado com sucesso!",
                data: observation 
            })
        }else{
            res.status(404).json({
                message: "Nenhum observation encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const getObservationsPokemonByPokemonController = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;

        const pokemonId = parseInt(id); 

        if (isNaN(pokemonId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const observations = await getObservationsPokemonByPokemon(pokemonId)

        if(observations){
            res.status(200).json({
                message: "Observations encontrados com sucesso!",
                data: observations 
            })
        }else{
            res.status(404).json({
                message: "Nenhum observation encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const updateObservationPokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const observationId = parseInt(id); 

        if (isNaN(observationId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const observationData = req.body;

        const observation = await updateObservation(observationId, observationData)

        if(observation){
            res.status(200).json({
                message: "Observation atualizado com sucesso!",
                data: observation 
            })
        }else{
            res.status(404).json({
                message: "Nenhum observation encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}

export const deleteObservationPokemonController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const observationId = parseInt(id); 

        if (isNaN(observationId)) {
            res.status(400).json({
                message: "ID inválido! O ID deve ser um número.",
            });
            return;
        }

        const observation = await deleteObservation(observationId)

        if(observation){
            res.status(200).json({
                message: "Observation deletado com sucesso!",
                data: observation 
            })
        }else{
            res.status(404).json({
                message: "Nenhum observation encontrado!",
            })
        }
    }catch(error){
        res.status(500).json({
            message: "Erro interno do servidor!",
            error
        })
    }
}