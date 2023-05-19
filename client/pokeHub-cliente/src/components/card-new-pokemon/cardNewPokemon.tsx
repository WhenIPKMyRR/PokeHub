import './cardNewPokemon.css'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

export default function CardNewPokemon(){
    return(
        <div className="card-new-pokemon">
            <div className="card-new-pokemon_container">
                <div className="card-new-pokemon_container__header">
                </div>
                <div className="card-new-pokemon_container__body">
                    <div className="card-new-pokemon_container__body__image">
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png" alt="Mewtwo"/>
                    </div>
                    <div className="card-new-pokemon_container__body__info">
                        <h3>
                            Meotwo
                        </h3>
                        <p>
                            Genetic
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
