import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GenericButton from '../generic-button/genericButton';
import './cardFavoritePokemonHome.css'
import { Link } from 'react-router-dom';

interface ICardFavoritePokemonHomeHome{
    name: string;
    image: string;
    description: string;
    rota?: number;
}

const cardFavoritePokemonHomeHome: React.FC<ICardFavoritePokemonHomeHome> = ({ name, image, description, rota}) =>{

    return(
        <>
            <div className='cardFavoritePokemonHome-container' key={name}>
                <div className='cardFavoritePokemonHome-text'>
                    <h1>
                        {name}
                    </h1>
                    <p>
                        {description}
                    </p>
                    <Link to={`/pokemon/${rota}`}>
                        <GenericButton text={"Conferir"} width={"127px"} height={"35px"} margin={"0em 0em 1em 0em"}/>
                    </Link>
                </div>
                <div className='cardFavoritePokemonHome-image'>
                    <div className='cardFavoritePokemonHome-image_container'>
                        <img src={image} alt='Palkia'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default cardFavoritePokemonHomeHome;