import TagTypePokemon from '../tag-type-pokemon/tagTypePokemon';
import './cardFavoritePokemon.css'
import { Link } from 'react-router-dom';

interface ICardFavoritePokemonProps {
    linkTo: string;
    backgroundColor: string;
    image: string;
    name: string;
    id: number;
}

const CardFavoritePokemon: React.FC<ICardFavoritePokemonProps> = (props) => {

    return (
        <Link to={props.linkTo}>
            <div className="cardFavoritePokemon-container"
                style={{ backgroundColor: props.backgroundColor }}
            >
                <div className="cardFavoritePokemon-header">
                    <span>
                        <TagTypePokemon />
                        <TagTypePokemon />

                    </span>
                    <p className='cardFavoritePokemon-header_id'>
                        {props.id}
                    </p>
                </div>
                <div className="cardFavoritePokemon-image">
                    <img src={props.image} alt={props.name} />
                </div>
                <div className="cardFavoritePokemon-text">
                    <h1 className='cardFavoritePokemon-text_name'>
                        {props.name}
                    </h1>
                </div>
            </div>
        </Link>
    );
}

export default CardFavoritePokemon