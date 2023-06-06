import { ContainerGlobal } from "../../styles/globalStyle"
import { usePokemonData } from "../../utils/usePokemonData"
import CardFavoritePokemon from "../../components/card-favorite-pokemon/cardFavoritePokemon"
import { Link, useNavigate } from "react-router-dom"
import IsErrorModal from "../../components/isErrorModal/isErrorModal"
import IsLoadingModal from "../../components/isLoadingModal/isLoadingModal"
import DropdownExampleImage from "../../components/dropDownMenu/dropDownMenu";
import './caughts.css'


const Caughts = () =>{

    const navigate = useNavigate();
    const { pokemonsPokeHub, isLoadingPokeHub, isError} = usePokemonData()


    return(
        <main>
            <ContainerGlobal>
                <div className="caughtsPokemons-header">
                    <button onClick={()=> navigate(-1)} className="pokemonPage-header_buttonBackPage">
                    <svg width={35} height={35} fill="none" stroke="#a3a3a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path d="m15 4-8 8 8 8" />
                    </svg>
                    </button>
                    <h1>Pokemons capturados</h1>
                    <DropdownExampleImage/>
                </div>
                <div className="caughtsPokemons-container_cards">
                    {isError && <IsErrorModal/>}
                    {isLoadingPokeHub && <IsLoadingModal/>}
                    {pokemonsPokeHub?.map(pokemon => (
                        <Link to={`/pokemon/${pokemon.name}`}>
                            <CardFavoritePokemon key={pokemon.id} pokemonId={pokemon.id} pokemonImage={pokemon.image} pokemonName={pokemon.name}/>
                        </Link>
                    ))}
                </div>
            </ContainerGlobal>
        </main>
    )
}
export default Caughts