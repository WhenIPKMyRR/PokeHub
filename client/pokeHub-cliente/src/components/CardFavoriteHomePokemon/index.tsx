import React, { useState, useEffect } from 'react'
import GenericButton from '../generic-button';
import './cardFavoritePokemonHome.css'
import { Link } from 'react-router-dom';

interface ICardFavoritePokemonHomeHome {
    name: string;
    image: string;
    description: string;
    rota?: string;
}

const cardFavoritePokemonHomeHome: React.FC<ICardFavoritePokemonHomeHome> = ({ name, image, description, rota }) => {

    return (
        <>
            <div className='cardFavoritePokemonHome-container' key={name}>
                <div className='cardFavoritePokemonHome-text'>
                    <h1>
                        {name}
                    </h1>
                    <p>
                        {description ? description : "A descrição está indisponivel para esse Pokemon"}
                    </p>
                    <Link to={`/pokemon/${rota}`}>
                        <GenericButton text={"Conferir"} width={"127px"} height={"35px"} margin={"0em 0em 0.8em 0em"} />
                    </Link>
                </div>
                <div className='cardFavoritePokemonHome-image'>
                    <div className='cardFavoritePokemonHome-image_container'>
                        <img src={image ? image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png"} alt="{props.name}" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardFavoritePokemonHomeHome;