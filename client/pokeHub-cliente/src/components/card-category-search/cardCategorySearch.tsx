import './cardCategorySearch.css'
import { Link } from 'react-router-dom';


interface ICardCategorySearchProps{
    linkTo: string;
    backgroundColor: string;
    image: string;
    title: string;
}

const CardCategorySearch: React.FC<ICardCategorySearchProps> = (props) =>{

    return(

        <Link to={props.linkTo} >
            <div className='cardCategorySearch-container'
                style={{ backgroundColor: props.backgroundColor }}
            >
                <img src={props.image} alt="" />
                <h1>
                    {props.title}
                </h1>
            </div>
        </Link>

    );

}

export default CardCategorySearch;