import React from 'react';
import './categoryPokemonHome.css'

interface ICategoryPokemonHomeProps{
    image: string;
    name: string;
}


const CategoryPokemonHome: React.FC<ICategoryPokemonHomeProps> = (props) =>{
    return(
        <div className='categoryPokemonHome-container'>
            <img src={props.image} alt={props.name}/>
            <p>
                {props.name}
            </p>
        </div>
    );
}

export default CategoryPokemonHome;