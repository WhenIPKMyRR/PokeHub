import { Link } from 'react-router-dom';
import './buttonAddPokemon.css'

interface IButtonAddPokemonProps{
    svgIcon: React.ReactNode;
    route: string;
}

const ButtonAddPokemon: React.FC<IButtonAddPokemonProps> = (props) =>{
    return(
       <Link to={props.route}>
           <button className='buttonAddPokemon'>
               {props.svgIcon}
           </button>
       </Link>
    )

}

export default ButtonAddPokemon;