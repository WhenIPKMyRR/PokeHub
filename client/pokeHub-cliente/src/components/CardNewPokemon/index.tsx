import './cardNewPokemon.css'
import TagTypePokemon from '../TagTypePokemon/tagTypePokemon';
import { IPokemonToCaught, usePokemon } from '../../services/PokeApiServices/usePokeApiData';
import ReactLoading from 'react-loading';
import { getColorByType } from '../../utils/getTypeColor';
import imageNull from '../../assets/images/image-null.png'

interface ICardNewPokemonProps {
    pokemon: IPokemonToCaught;
}
const CardNewPokemon: React.FC<ICardNewPokemonProps> = ({ pokemon }) => {

    const { data: pokemonTo, isLoading, isError } = usePokemon(pokemon);

    if (isLoading) {
        return <ReactLoading />;
    }
    if (isError) {
        return <h1>Erro ao carregar os pokemons</h1>;
    }

    return (
        <div className='cardNewPokemon-container'
            style={{ backgroundColor: pokemonTo?.types?.slice(0, 1).map((type) => getColorByType(type?.type?.name)) }}
        >
            <div className='cardNewPokemon-type'>
                {pokemonTo?.types?.slice(0, 2).map((type) => {
                    return (
                        <TagTypePokemon
                            name={type.type.name}
                            fontSize="0.7em"
                            padding="0.5em 0.35em"
                            margin="0em 0.25em 0em 0em"
                        />
                    )
                })
                }
            </div>
            <div className='cardNewPokemon-image'>
                <div className='cardNewPokemon-image_container'>
                    <img src={pokemonTo?.sprites.other['official-artwork'].front_default ? pokemonTo?.sprites.other['official-artwork'].front_default : imageNull} alt={pokemonTo?.name} />
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
