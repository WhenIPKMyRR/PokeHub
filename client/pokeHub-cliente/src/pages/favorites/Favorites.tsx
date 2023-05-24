import ButtonAddPokemon from "../../components/button-add-pokemon/buttonAddPokemon";
import CardFavoritePokemon from "../../components/card-favorite-pokemon/cardFavoritePokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import './favorites.css'

const Favorites =() =>{
    return(
        <main>
            <ContainerGlobal>
                <div className="favorites-pokemons">
                    <CardFavoritePokemon linkTo="/" backgroundColor="#D35400" id={10} name="Golem" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/076.png"/>
                    <CardFavoritePokemon linkTo="/" backgroundColor="#D5DBDB" id={24} name="Registeel" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/379.png"/>
                    <CardFavoritePokemon linkTo="/" backgroundColor="#A2D9DA" id={89} name="Regice" image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/378.png"/>
                    <CardFavoritePokemon linkTo="/" backgroundColor="#FFC300" id={47} name="Toxtricity " image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/849.png"/>
                    <CardFavoritePokemon linkTo="/" backgroundColor="#F1948A" id={1} name="Mewtwo " image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png"/>
                    <CardFavoritePokemon linkTo="/" backgroundColor="#5DADE2" id={5} name="Vaporeon " image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png"/>
                </div>
            </ContainerGlobal>
            <span className='add-Pokemon'>
               <ButtonAddPokemon 
                    svgIcon={
                        <svg width="40" height="40" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12H4"></path>
                            <path d="M12 20V4"></path>
                        </svg>
                    }
                />
           </span>
        </main>
    )
}

export default Favorites;