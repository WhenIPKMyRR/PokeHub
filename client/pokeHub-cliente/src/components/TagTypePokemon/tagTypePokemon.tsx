import { getColorByType } from '../../utils/getTypeColor';
import './tagTypePokemon.css'

interface ITagTypePokemonProps {
    name: string;
    padding: string;
    fontSize: string;
    margin?: string;
}

const TagTypePokemon: React.FC<ITagTypePokemonProps> = ({ name, padding, fontSize, margin }) => {
    const color = getColorByType(name);

    return (
        <div className="tag-type_pokemon"
            style={{
                padding: padding,
                backgroundColor: color,
                margin: margin
            }}
        >
            <p style={{ fontSize: fontSize }}>
                {name}
            </p>
        </div>
    );
}

export default TagTypePokemon;