import './tagTypePokemon.css'

interface ITagTypePokemonProps{
    type: string;
}

const TagTypePokemon: React.FC<ITagTypePokemonProps> = (props) =>{
    return(
        <div className="tag-type_pokemon">
            <p>
                {props.type}
            </p>
        </div>
    );
}

export default TagTypePokemon;