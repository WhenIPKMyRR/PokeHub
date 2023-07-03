import ButtonAddPokemon from "../../components/GenericButton";
import CardFavoritePokemon from "../../components/CardFavoritePokemon";
import { ContainerGlobal } from "../../styles/globalStyle";
import { usePokemonData } from "../../utils/usePokemonData";
import { Link, useNavigate } from "react-router-dom";
import IsErrorModal from "../../components/ErrorModal";
import IsLoadingModal from "../../components/LoadingModal";
import DropdownExampleImage from "../../components/DropdownModal";
import './favorites.css'


const Favorites = () => {

    const navigate = useNavigate();

    const { pokemonsPokeHub, isLoadingPokeHub, isError } = usePokemonData();


    return (
        <main>
            <ContainerGlobal>
                <div className="favoritesPokemons-header">
                    <h1>Pokemons favoritos</h1>
                </div>
                <div className="favoritesPokemons-container">
                    {isLoadingPokeHub && <IsLoadingModal />}
                    {pokemonsPokeHub?.filter(
                        (pokemon) => pokemon.isFavorite === true
                    ).reverse().map((pokemon) => (
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <CardFavoritePokemon
                                pokemonName={pokemon.name}
                                pokemonImage={pokemon.image}
                                key={pokemon.id}
                                rote={`/pokemon/${pokemon.name}`}
                            />
                        </Link>
                    ))}
                    {isError && <IsErrorModal />}
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


