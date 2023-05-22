import './buttonAddPokemon.css'

interface IButtonAddPokemonProps{
    svgIcon: React.ReactNode;
}

const ButtonAddPokemon: React.FC<IButtonAddPokemonProps> = (props) =>{
    return(
       <button className='buttonAddPokemon'>
           {props.svgIcon}
       </button>
    )

}

export default ButtonAddPokemon;