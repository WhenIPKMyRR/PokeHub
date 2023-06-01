import { ContainerGlobal } from "../../styles/globalStyle"
import { usePokemonData } from "../../utils/usePokemonData"
import CardFavoritePokemon from "../../components/card-favorite-pokemon/cardFavoritePokemon"
import ReactLoading from "react-loading"
import { Link } from "react-router-dom"


const Caughts = () =>{

    const { pokemonsPokeHub, isLoadingPokeHub, isError} = usePokemonData()


    return(
        <main>
            <ContainerGlobal>
                <h1>Caughts</h1>
                <div>
                    {isError && <h1>Erro ao carregar os pokemons</h1>}
                    {isLoadingPokeHub && <ReactLoading
                      type="spin"
                      color="#DD655E"
                    />}
                    {pokemonsPokeHub?.map(pokemon => (
                        <Link to={`/pokemon/${pokemon.id}`}>
                            <CardFavoritePokemon key={pokemon.id} pokemonId={pokemon.id} pokemonImage={pokemon.image} pokemonName={pokemon.name}/>
                        </Link>
                    ))}
                </div>
            </ContainerGlobal>
        </main>
    )
}
export default Caughts