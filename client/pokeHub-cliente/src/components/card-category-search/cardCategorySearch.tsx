import './cardCategorySearch.css'
import { Link } from 'react-router-dom';


interface ICardCategorySearchProps{
    backgroundColor: string;
    image: string;
    title: string;
}

const CardCategorySearch: React.FC<ICardCategorySearchProps> = (props) =>{

    return(
        <div className='cardCategorySearch-container'
            style={{ backgroundColor: props.backgroundColor }}
        >
            <img src={props.image} alt="" />
            <h1>
                {props.title}
            </h1>
        </div>
    );

}

export default CardCategorySearch;