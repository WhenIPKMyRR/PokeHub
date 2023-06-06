import { useParams } from 'react-router';
import { IFavoritePokemonData } from '../../interfaces/IFavoritePokemonData';
import { getColorByType } from '../../services/getTypeColor';
import { getTypeByPokemonData } from '../../utils/useTypePokemonData';
import TagTypePokemon from '../tag-type-pokemon/tagTypePokemon';
import './cardFavoritePokemon.css'



const CardFavoritePokemon: React.FC<IFavoritePokemonData> = ({ pokemonId, pokemonName, pokemonImage }) => {

    const params = useParams();
    const currentPokemon = params["*"] as string;


    const { typeByPokemonData, isLoadingByType, isErrorByType } = getTypeByPokemonData(pokemonName)
    

    return (
        <div className="cardFavoritePokemon-container"
            style={{ backgroundColor: typeByPokemonData?.slice(0,1).map((type) => getColorByType(type?.name)) }}
        >
            <div className="cardFavoritePokemon-header">
                <span>
                    {typeByPokemonData?.slice(0,2).map((type) => {''
                        return(
                            <TagTypePokemon 
                            name={type.name} 
                            fontSize="0.7em"
                            padding="0.5em 0.35em"
                            margin="0em 0.18em 0em 0em"
                            />
                        )})
                    }
                </span>
                <p className='cardFavoritePokemon-header_id'>
                    {pokemonId}
                </p>
            </div>
            <div className="cardFavoritePokemon-image">
                <img src={pokemonImage} alt="{props.name}" />
            </div>
            <div className="cardFavoritePokemon-text">
                <h1 className='cardFavoritePokemon-text_name'>
                    {pokemonName}
                </h1>
            </div>
        </div>
    );
}

export default CardFavoritePokemon