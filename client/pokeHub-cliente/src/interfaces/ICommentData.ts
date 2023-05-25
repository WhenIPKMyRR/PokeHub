import { IUserData } from "./IUserData";

export interface IObservationData {
    id?: number;
    master?: string;
    masterId?: number;
    userName: string;
    pokemonId?: number;
    pokemon?: string;
    description: string;
    observation?: string;
    created_at?: string;
    updated_at?: string;
  }
  