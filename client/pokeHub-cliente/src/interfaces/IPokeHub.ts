export interface IPokemonPokeHubData{
    id?: number;
    name: string;
    types: [
        type:{
            id: number;
            name: string;
        }
    ];
    image: string;
    description: string;
    height: string;
    weight: string;
    baseExperience: number;
    userId: number;
    color: string;
    observations:[
        observation:{
            id: number;
            description: string;
            userId: number;
            pokemonId: number;
            user:{
                id: number;
                firstName: string;
                lastName: string;
                avatar: string;
            }
            
        }
    ]
    users:[
        user:{
            id: number;
            firstName: string;
            lastName: string;
            email: string;
            avatar: string;
        }
    ]
    isFavorite?: boolean
}

export interface IPokemonPokeHubToCreateData {
    name: string;
    image: string;
    types: { name: string }[];
    weight: string;
    height: string;
    userId: number;
    baseExperience: number;
    description: string;
    color: string;
  }
  

