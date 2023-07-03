import { useParams } from 'react-router';
import { IFavoritePokemonData } from '../../interfaces/IFavoritePokemonData';
import { getColorByType } from '../../utils/getTypeColor';
import { getTypeByPokemonData } from '../../services/TypesPokeHubAPIServices/useTypePokemonData';
import TagTypePokemon from '../TagTypePokemon/tagTypePokemon';
import { Link } from 'react-router-dom';
import './cardFavoritePokemon.css'
import IsLoadingModal from '../LoadingModal';
import IsErrorModal from '../ErrorModal';




const CardFavoritePokemon: React.FC<IFavoritePokemonData> = ({ pokemonId, pokemonName, pokemonImage, rote }) => {

    const { typeByPokemonData, isLoadingByType, isErrorByType } = getTypeByPokemonData(pokemonName)

    const colorCardPokemon = typeByPokemonData?.map((type) => getColorByType(type?.name))
    const backgroundColorCard = {
        backgroundColor: colorCardPokemon?.slice(0, 1).map((color) => color)[0]
    }
    return (
        <div className="cardFavoritePokemon-container">
            <Link to={rote} style={backgroundColorCard}>
                <div className="cardFavoritePokemon-header">
                    <span>
                        {isErrorByType && <IsErrorModal />}
                        {isLoadingByType ? <IsLoadingModal /> :
                            typeByPokemonData?.slice(0, 1).map((type) => {
                                ''
                                return (
                                    <TagTypePokemon
                                        name={type.name}
                                        fontSize="0.7em"
                                        padding="0.5em 0.35em"
                                        margin="0em 0.18em 0em 0em"
                                    />
                                )
                            })
                        }
                    </span>
                    <p className='cardFavoritePokemon-header_id'>
                        {pokemonId}
                    </p>
                </div>
                <div className="cardFavoritePokemon-image">
                    <img src={pokemonImage ? pokemonImage : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png"} alt="{props.name}" />
                </div>
                <div className="cardFavoritePokemon-text">
                    <h1 className='cardFavoritePokemon-text_name'>
                        {pokemonName}
                    </h1>
                </div>
            </Link>
        </div>
    );
}

export default CardFavoritePokemon