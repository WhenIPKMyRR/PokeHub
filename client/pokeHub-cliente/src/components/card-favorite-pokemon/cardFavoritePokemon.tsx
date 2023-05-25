import { IPokemonData } from '../../interfaces/IPokemonData';
import TagTypePokemon from '../tag-type-pokemon/tagTypePokemon';
import './cardFavoritePokemon.css'
import { Link } from 'react-router-dom';

// interface ICardFavoritePokemonProps {
//     linkTo: string;
//     backgroundColor: string;
//     image: string;
//     name: string;
//     id: number;
// }

const CardFavoritePokemon: React.FC<IPokemonData> = ({ id, name, type}) => {

    return (
        <div className="cardFavoritePokemon-container"
            style={{ backgroundColor:"#c1c158" }}
        >
            <div className="cardFavoritePokemon-header">
                <span>
                    <TagTypePokemon type={type} />
                    <TagTypePokemon type={type}/>

                </span>
                <p className='cardFavoritePokemon-header_id'>
                    {id}
                </p>
            </div>
            <div className="cardFavoritePokemon-image">
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png" alt="{props.name}" />
            </div>
            <div className="cardFavoritePokemon-text">
                <h1 className='cardFavoritePokemon-text_name'>
                    {name}
                </h1>
            </div>
        </div>
    );
}

export default CardFavoritePokemon