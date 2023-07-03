import axios from "axios";


export const PokeHubApi = axios.create({
    baseURL: "http://localhost:3003",
});

export const PokeApi = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
});