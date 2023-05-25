import { useQuery } from 'react-query'
import axios from 'axios'
import GenericButton from '../generic-button/genericButton';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import './cardLastAddPokemon.css'


export type Pokemon = {
    name: string;
}

const CardLastAddPokemon: React.FC = () =>{

    const { data, isFetching } = useQuery<Pokemon[]>('all', async ()=>{
        const response = await axios.get('http://localhost:3003/pokemon/all')

        return response.data.data
    }, {
        staleTime: 1000 * 60, // 1 minuto
    })

    return(
        <>
            { isFetching && 
                <span>
                    <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                </span>
            }
            {data?.map(pokemon =>{
                return(
                    <div className='cardLastAddPokemon-container' key={pokemon.name}>
                        <div className='cardLastAddPokemon-text'>
                            <h1>
                                {pokemon.name}
                            </h1>
                            <p>
                                Mistura entre armadura de guerra e um crustacio
                            </p>
                            <Link to={`/caughts/${pokemon.name}`}>
                                <GenericButton text={"Conferir"} width={"127px"} height={"35px"} margin={"0em 0em 1em 0em"}/>
                            </Link>
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