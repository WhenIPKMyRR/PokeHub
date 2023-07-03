import { ContainerGlobal } from "../../styles/globalStyle"
import { usePokemonData } from "../../utils/usePokemonData"
import CardFavoritePokemon from "../../components/CardFavoritePokemon"
import IsErrorModal from "../../components/ErrorModal"
import IsLoadingModal from "../../components/LoadingModal"
import './caughts.css'
import HeaderMobile from "../../components/HeaderMobile"


const Caughts = () => {

    const { pokemonsPokeHub, isLoadingPokeHub, isError } = usePokemonData()

    return (
        <main>
            <ContainerGlobal>
                <HeaderMobile title="Pokemons capturados" />
                <div className="caughtsPokemons-container_cards">
                    {isError && <IsErrorModal />}
                    {isLoadingPokeHub && <IsLoadingModal />}
                    {pokemonsPokeHub?.reverse().map(pokemon => (
                        <CardFavoritePokemon key={pokemon.id} pokemonId={pokemon.id} pokemonImage={pokemon.image} pokemonName={pokemon.name} rote={`/pokemon/${pokemon.name}`} />
                    ))}
                </div>
            </ContainerGlobal>
        </main>
    )
}
export default Caughts