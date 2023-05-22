import './cardNewPokemon.css'
import TagTypePokemon from '../tag-type-pokemon/tagTypePokemon';

const CardNewPokemon: React.FC = () =>{

    return( 
    <div className='cardNewPokemon-container'>
        <div className='cardNewPokemon-type'>
            <TagTypePokemon/>
        </div>
        <div className='cardNewPokemon-image'>
            <div className='cardNewPokemon-image_container'>
                <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png' alt='Mewtwo '/>
            </div>
        </div>
        <div className='cardNewPokemon-text'>
            <p>
                Mewtwo  
            </p>
        </div>
    </div>
    );
}

export default CardNewPokemon;
