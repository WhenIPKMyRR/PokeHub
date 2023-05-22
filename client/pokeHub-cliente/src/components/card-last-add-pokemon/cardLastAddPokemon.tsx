import GenericButton from '../generic-button/genericButton';
import ReactLoading from 'react-loading';
import './cardLastAddPokemon.css'
import { useFetch } from '../../utils/useFetch';

interface Pokemon{
    name: string;
}

const CardLastAddPokemon: React.FC = () =>{

    const { data: pokemons, isFetching } = useFetch<Pokemon[]>('/pokemon/all')
    return(
        <>
            { isFetching && 
                <span>
                    <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                </span>
            }
            {pokemons?.map(pokemon =>{
                return(
                    <div className='cardLastAddPokemon-container' key={pokemon.name}>
                        <div className='cardLastAddPokemon-text'>
                            <h1>
                            {pokemon.name}
                            </h1>
                            <p>
                                Mistura entre armadura de guerra e um crustacio
                            </p>
                        <GenericButton text={"Conferir"} width={"127px"} height={"35px"} margin={"0em 0em 1em 0em"}/>
                        </div>
                        <div className='cardLastAddPokemon-image'>
                            <div className='cardLastAddPokemon-image_container'>
                                <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/205.png' alt='Forretress'/>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default CardLastAddPokemon;