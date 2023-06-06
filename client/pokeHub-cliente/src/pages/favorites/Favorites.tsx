import ReactLoading from "react-loading";
import ButtonAddPokemon from "../../components/button-add-pokemon/buttonAddPokemon";
import CardFavoritePokemon from "../../components/card-favorite-pokemon/cardFavoritePokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import { usePokemonData }  from "../../utils/usePokemonData";
import { Link, useParams } from "react-router-dom";
import './favorites.css'

const Favorites =() =>{

    const params = useParams();
    const currentPokemon = params["*"] as string;
    
  const  { pokemonsPokeHub, isLoadingPokeHub, isError } = usePokemonData();
    

    return(
        <main>
            <ContainerGlobal>
                <div className="favorites-pokemons">
                    <>
                        {
                            isLoadingPokeHub && 
                            <span>
                                <ReactLoading type="bars" color="#DD655E" height={50} width={50} />
                            </span>
                        }
                        {pokemonsPokeHub?.filter(
                            (pokemon) => pokemon.isFavorite === true 
                        ).map((pokemon) => (
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <CardFavoritePokemon 
                                    pokemonName={pokemon.name}
                                    pokemonImage={pokemon.image}
                                    key={pokemon.id}
                                />
                            </Link>
                        ))}
                       
                    </>
                </div>
            </ContainerGlobal>
            <span className='add-Pokemon'>
               <ButtonAddPokemon 
                    route="/add"
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


