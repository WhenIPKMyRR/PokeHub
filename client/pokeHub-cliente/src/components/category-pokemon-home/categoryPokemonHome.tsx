import React from 'react';
import './categoryPokemonHome.css'
import { Link } from 'react-router-dom';

interface ICategoryPokemonHomeProps{
    image: string;
    name: string;
    rota: string;
}


const CategoryPokemonHome: React.FC<ICategoryPokemonHomeProps> = (props) =>{
    return(
        <Link to={props.rota}>
            <div className='categoryPokemonHome-container'>
                <img src={props.image} alt={props.name}/>
                <p>
                    {props.name}
                </p>
            </div>
        </Link>
    );
}

export default CategoryPokemonHome;