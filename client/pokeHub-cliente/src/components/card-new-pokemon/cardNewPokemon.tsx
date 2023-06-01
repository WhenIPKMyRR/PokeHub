import './cardNewPokemon.css'
import TagTypePokemon from '../tag-type-pokemon/tagTypePokemon';
import { IPokemonToCaught, usePokemon } from '../../utils/usePokeApiData';
import ReactLoading from 'react-loading';
import { getColorByType } from '../../services/getTypeColor';

interface ICardNewPokemonProps{
    pokemon: IPokemonToCaught;
}
const CardNewPokemon: React.FC<ICardNewPokemonProps> = ({ pokemon }) =>{

  const { data: pokemonTo, isLoading, isError } = usePokemon(pokemon);

    if (isLoading) {
        return <ReactLoading />;
    }
    if (isError) {
        return <h1>Erro ao carregar os pokemons</h1>;
    }

    return( 
    <div className='cardNewPokemon-container'
        style={{ backgroundColor: pokemonTo?.types?.slice(0, 1).map((type) => getColorByType(type?.type?.name)) }}
    >
        <div className='cardNewPokemon-type'>
          {pokemonTo?.types?.slice(0,2).map((type) => {
              return(
                <TagTypePokemon 
                  name={type.type.name} 
                  fontSize="0.7em"
                  padding="0em 0.5em"
                  color={"#A8D8EA"}
                />
              )})
            }
        </div>
        <div className='cardNewPokemon-image'>
            <div className='cardNewPokemon-image_container'>
                <img src={pokemonTo?.sprites.other['official-artwork'].front_default} alt={pokemonTo?.name}/>
            </div>
        </div>
        <div className='cardNewPokemon-text'>
            <p>
                {pokemonTo?.name}  
            </p>
        </div>
    </div>
    );
}

export default CardNewPokemon;
