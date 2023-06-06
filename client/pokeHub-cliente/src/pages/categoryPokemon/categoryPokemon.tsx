import { ContainerGlobal } from "../../styles/globalStyle";
import { useParams } from "react-router";
import { usePokemonDataByType } from "../../utils/usePokemonData";
import CardFavoritePokemon from "../../components/card-favorite-pokemon/cardFavoritePokemon";
import IsLoadingModal from "../../components/isLoadingModal/isLoadingModal";
import IsErrorModal from "../../components/isErrorModal/isErrorModal";
import GenericButton from "../../components/generic-button/genericButton";
import { Link } from "react-router-dom";

const CategoryPokemon = () =>{

    const params = useParams();
    const currentType = params["*"] as string;

    const { pokemonsPokeHub, isLoadingPokeHub, isError } = usePokemonDataByType(currentType)

    if(pokemonsPokeHub?.length == 0){
        return(
            <main>
                <ContainerGlobal>
                <span className='isErrorModal-container'>
                    <div className='isErrorModal-container_image'>
                        <img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png' alt='Mimikyu' />
                    </div>
                    <h1>Ops.. Sem pokemons aqui </h1>
                    <p> Parece que você não tem pokemons nessa categoria, ainda...  </p>
                    <Link to={'add'}>
                        <GenericButton text='Procurar' height='3em' width='12em'/>
                    </Link>
                </span>
                </ContainerGlobal>
            </main>
        )
    }

    return(
        <main>
            <ContainerGlobal>
                <h1>
                    CategoryPokemon
                </h1>
                <div>
                    { isLoadingPokeHub && <IsLoadingModal/> }
                    { isError && <IsErrorModal/> }
                    {pokemonsPokeHub?.map((pokemonCategory) => { 
                        return(
                            <CardFavoritePokemon key={pokemonCategory.name}
                                pokemonName={pokemonCategory.name}
                                pokemonImage={pokemonCategory.image}
                                pokemonId={pokemonCategory.id}
                            />
                        )
                    })}   
                </div>
            </ContainerGlobal>
        </main>
    )
}

export default CategoryPokemon;