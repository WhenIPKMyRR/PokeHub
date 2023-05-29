import ReactLoading from "react-loading";
import ButtonAddPokemon from "../../components/button-add-pokemon/buttonAddPokemon";
import CardFavoritePokemon from "../../components/card-favorite-pokemon/cardFavoritePokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import { usePokemonData }  from "../../utils/usePokemonData";
import './favorites.css'
import { Link } from "react-router-dom";
import { useFavoritePokemonData } from "../../utils/useFavoritePokemonData";

const Favorites =() =>{

    const{ favoritesPokemons, isLoadingFavorites } = useFavoritePokemonData()

    return(
        <main>
            <ContainerGlobal>
                <div className="favorites-pokemons">
                    <>
                        {
                            isLoadingFavorites && 
                            <span>
                                <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                            </span>
                        }
                        {favoritesPokemons?.map(favorite =>{
                            return(
                                <Link to={`/pokemon/${favorite.id}`}>
                                    <CardFavoritePokemon pokemonName={favorite.pokemonName } userId={favorite.userId} pokemonType={favorite.pokemonType} pokemonImage={favorite.pokemonImage}/>
                                </Link>
                            )
                        })}
                    </>
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


