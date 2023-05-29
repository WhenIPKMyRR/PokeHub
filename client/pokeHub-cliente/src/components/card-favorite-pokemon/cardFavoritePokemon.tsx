import { IFavoritePokemonData } from '../../interfaces/IFavoritePokemonData';
import { IPokemonData } from '../../interfaces/IPokemonData';
import TagTypePokemon from '../tag-type-pokemon/tagTypePokemon';
import './cardFavoritePokemon.css'
import { Link } from 'react-router-dom';



const CardFavoritePokemon: React.FC<IFavoritePokemonData> = ({ userId, pokemonName, pokemonImage, pokemonType}) => {

    return (
        <div className="cardFavoritePokemon-container"
            style={{ backgroundColor:"#c1c158" }}
        >
            <div className="cardFavoritePokemon-header">
                <span>
                    <TagTypePokemon type={pokemonType} />
                    <TagTypePokemon type={pokemonType}/>

                </span>
                <p className='cardFavoritePokemon-header_id'>
                    {userId}
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