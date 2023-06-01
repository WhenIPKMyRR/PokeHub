import { getColorByType } from '../../services/getTypeColor';
import './tagTypePokemon.css'

interface ITagTypePokemonProps{
    name: string;
    padding: string;
    fontSize: string;
}

const TagTypePokemon: React.FC<ITagTypePokemonProps> = ({ name, padding, fontSize }) =>{
    const color = getColorByType(name);
    
    return(
        <div className="tag-type_pokemon" 
            style={{ padding: padding,
                    backgroundColor: color,
            }}
        >
            <p style={{ fontSize: fontSize }}>
                {name}
            </p>
        </div>
    );
}

export default TagTypePokemon;