import { Link } from 'react-router-dom';
import GenericButton from '../generic-button';
import './cardLastAddPokemon.css'


export type ICardLastAddPokemon = {
    name: string;
    image: string;
    description: string;
    rota?: string;
}

const CardLastAddPokemon: React.FC<ICardLastAddPokemon> = ({ name, image, description, rota }) => {

    return (
        <div className='cardLastAddPokemon-container' key={name}>
            <div className='cardLastAddPokemon-text'>
                <h1>
                    {name}
                </h1>
                <p>
                    {description ? description : "A descrição está indisponivel para esse Pokemon"}
                </p>
                <Link to={`/pokemon/${rota}`}>
                    <GenericButton text={"Conferir"} width={"127px"} height={"35px"} margin={"0em 0em 0.8em 0em"} />
                </Link>
            </div>
            <div className='cardLastAddPokemon-image'>
                <div className='cardLastAddPokemon-image_container'>
                    <img src={image ? image : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png"} alt={name} />
                </div>
            </div>
        </div>
    )
}

export default CardLastAddPokemon;