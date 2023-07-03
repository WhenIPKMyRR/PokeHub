import { ContainerGlobal } from "../../styles/globalStyle";
import { useParams } from "react-router";
import { usePokemonDataByType } from "../../utils/usePokemonData";
import CardFavoritePokemon from "../../components/CardFavoritePokemon";
import IsLoadingModal from "../../components/LoadingModal";
import IsErrorModal from "../../components/ErrorModal";
import GenericButton from "../../components/generic-button";
import { Link } from "react-router-dom";
import HeaderMobile from "../../components/HeaderMobile";
import { useTranslation } from 'react-i18next';
import './categoryPokemon.css'


const CategoryPokemon = () => {

    const params = useParams();
    const currentType = params["*"] as string;

    const { pokemonsPokeHub, isLoadingPokeHub, isError } = usePokemonDataByType(currentType)

    const { t } = useTranslation();

    const translatedString = t(currentType);


    if (pokemonsPokeHub?.length == 0) {
        return (
            <main>
                <IsErrorModal image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/122.png" placeholder="Capturar" title="Sem pokemons por aqui" text="Parece que você não tem pokemons desse tipo ainda..." />
            </main>
        )
    }

    return (
        <main>
            <ContainerGlobal>
                <HeaderMobile title={t(translatedString)} />
                <div className="categoryPokemon-container_cards">
                    {isLoadingPokeHub && <IsLoadingModal />}
                    {isError && <IsErrorModal />}
                    {pokemonsPokeHub?.map((pokemonCategory) => {
                        return (
                            <CardFavoritePokemon key={pokemonCategory.name}
                                pokemonName={pokemonCategory.name}
                                pokemonImage={pokemonCategory.image}
                                pokemonId={pokemonCategory.id}
                                rote={`/pokemon/${pokemonCategory.name}`}
                            />
                        )
                    })}
                </div>
            </ContainerGlobal>
        </main>
    )
}

export default CategoryPokemon;