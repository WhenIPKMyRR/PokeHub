import ReactLoading from "react-loading";
import ButtonAddPokemon from "../../components/button-add-pokemon/buttonAddPokemon";
import CardFavoritePokemon from "../../components/card-favorite-pokemon/cardFavoritePokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import { usePokemonData }  from "../../utils/usePokemonData";
import './favorites.css'
import { Link } from "react-router-dom";

const Favorites =() =>{

    const{ pokemons, isLoadingPokemons } = usePokemonData()

    return(
        <main>
            <ContainerGlobal>
                <div className="favorites-pokemons">
                    <>
                        {
                            isLoadingPokemons && 
                            <span>
                                <ReactLoading/>
                            </span>
                        }
                        {pokemons?.map(pokemon =>{
                            return(
                                <Link to={`/pokemon/${pokemon.id}`}>
                                    <CardFavoritePokemon name={pokemon.name} id={pokemon.id} type={pokemon.type}/>
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


