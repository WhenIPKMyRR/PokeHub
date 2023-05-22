import React,{useState, useEffect} from 'react'
import axios from 'axios'
import GenericButton from '../generic-button/genericButton';
import './cardFavoritePokemon.css'

interface Pokemon{
    name: string;
}

const CardFavoritePokemon: React.FC = () =>{
    const [ pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        axios.get('http://localhost:3003/pokemon/all')
        .then((response) =>{
            setPokemons(response.data.data)
        })
        .catch((error) =>{
            console.log(error)
        })
    }, [])

    return(
        <>
            {pokemons.map(pokemon => {
                return(
                    <div className='cardFavoritePokemon-container' key={pokemon.name}>
                        <div className='cardFavoritePokemon-text'>
                            <h1>
                                {pokemon.name}
                            </h1>
                            <p>
                                Diz-se que o tempo arrancou quando Dialga nasceu trazendo assim a realidade como nos conhecemos...
                            </p>
                        <GenericButton text={"Conferir"} width={"127px"} height={"35px"} margin={"0em 0em 1em 0em"}/>
                        </div>
                        <div className='cardFavoritePokemon-image'>
                            <div className='cardFavoritePokemon-image_container'>
                                <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png' alt='Palkia'/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardFavoritePokemon;