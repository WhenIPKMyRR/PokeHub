import React from "react";
import "./tabObservationPokemon.css";

interface ITabObservationPokemonProps{
    type: string;
    value: string;
}

const TabObservationPokemon: React.FC<ITabObservationPokemonProps> = (props) =>{
    return(
        <div className="tabObservationPokemon-container">
            <svg width={35} height={35} fill="#a3a3a3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0ZM13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            <strong>
                {props.type}
            </strong>
            <p>
                {props.value}
            </p>
        </div>
    )
}

export default TabObservationPokemon;