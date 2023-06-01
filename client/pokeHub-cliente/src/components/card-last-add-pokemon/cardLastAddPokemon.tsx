import { Link } from 'react-router-dom';
import GenericButton from '../generic-button/genericButton';
import './cardLastAddPokemon.css'


export type ICardLastAddPokemon = {
    name: string;
    image: string;
    description: string;
    rota?: number;
}

const CardLastAddPokemon: React.FC<ICardLastAddPokemon> = ({ name, image, description, rota }) =>{

    return(
        <div className='cardLastAddPokemon-container' key={name}>
            <div className='cardLastAddPokemon-text'>
                <h1>
                    {name}
                </h1>
                <p>
                    {description}
                </p>
                <Link to={`/pokemon/${rota}`}>
                    <GenericButton text={"Conferir"} width={"127px"} height={"35px"} margin={"0em 0em 1em 0em"}/>
                </Link>
            </div>
            <div className='cardLastAddPokemon-image'>
                <div className='cardLastAddPokemon-image_container'>
                    <img src={image} alt={name}/>
                </div>
            </div>
        </div>
    )
}

export default CardLastAddPokemon;