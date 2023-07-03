import { IPokemonPokeHubData } from '../../interfaces/IPokeHub';
import { IPokemonData, usePokemon } from '../../services/PokeApiServices/usePokeApiData';
import { usePokemonData } from '../../utils/usePokemonData';
import { getTypeByPokemonData } from '../../services/TypesPokeHubAPIServices/useTypePokemonData';
import TagTypePokemon from '../TagTypePokemon/tagTypePokemon';
import './cardSearchPokemon.css'

interface ICardSearchPokemon {
    pokemon: IPokemonPokeHubData;
}

const CardSearchPokemon: React.FC<ICardSearchPokemon> = ({ pokemon }) => {

    const { typeByPokemonData } = getTypeByPokemonData(pokemon.name)

    return (
        <div className='cardSearchPokemon-container'>
            <img src={pokemon?.image} alt={pokemon.name} className='cardSearchPokemon-image' />
            <div className='cardSearchPokemon-text'>
                <span className='cardSearchPokemon-text_title'>
                    <h1>{pokemon?.name}</h1>
                    <h2>
                        {pokemon.id}
                    </h2>
                </span>
                <span className='cardSearchPokemon-types'>
                    {typeByPokemonData?.map((type) => (
                        <TagTypePokemon
                            key={type.name}
                            name={type.name}
                            fontSize='0.7em'
                            padding='0.6em 0.4em'
                            margin='0em 0.25em 0em 0em'
                        />
                    ))}
                </span>
            </div>
        </div>
    )

}

export default CardSearchPokemon;