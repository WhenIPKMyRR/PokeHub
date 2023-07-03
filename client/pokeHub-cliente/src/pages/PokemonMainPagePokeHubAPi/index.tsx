import { ContainerGlobal } from "../../styles/globalStyle";
import { useCurrentPokemonPokeApiData } from "../../services/PokeApiServices/usePokeApiData";
import { useMutation } from "react-query";
import { IPokemonPokeAPiData } from "../../interfaces/IPokeApi";
import { useParams } from "react-router";
import TagTypePokemon from "../../components/TagTypePokemon/tagTypePokemon";
import HeaderMobile from "../../components/HeaderMobile";
import IsLoadingModal from "../../components/LoadingModal";
import { usePokemonColorPokeAPI } from "../../services/PokeApiServices/useColorPokeAPI";
import './pokemonPokeApi.css'
import { usePokemonDescriptionPokeAPI } from "../../services/PokeApiServices/useDescriptionPokeApiData";
import { useMutatePokemonPokeHubData } from "../../services/PokemonsPokeHubAPIServices/useMutatePokemonPokeHubData";
import { IPokemonPokeHubData, IPokemonPokeHubToCreateData } from "../../interfaces/IPokeHub";


interface ITabObservationPokemonProps {
    type: string;
    value?: string;
}

const TabObservationPokemons: React.FC<ITabObservationPokemonProps> = ({ type, value }) => {

    return (
        <div className="tabObservationPokemon-container">
            <svg
                width={35}
                height={35}
                fill="#a3a3a3"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    d="M3.25 12a8.75 8.75 0 1 1 17.5 0 8.75 8.75 0 0 1-17.5 0ZM13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-1 2.75a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                />
            </svg>
            <strong>{type}</strong>
            <p>{value}</p>
        </div>
    );
};



const PokemonPokeApi = () => {

    const params = useParams();
    const currentPokemon = params['*'] as string;
  
    const { pokemonPokeAPIData, isLoadingPokemon } = useCurrentPokemonPokeApiData(currentPokemon);
    const { data: color } = usePokemonColorPokeAPI(currentPokemon);
    const { data: description } = usePokemonDescriptionPokeAPI(currentPokemon);
  
    const { createPokemon } = useMutatePokemonPokeHubData();
 
        async function handleCreatePokemon(pokemonPokeAPIData: IPokemonPokeAPiData) {

            if (pokemonPokeAPIData) {
                const pokemonData: IPokemonPokeHubToCreateData = {
                    name: pokemonPokeAPIData.name || "",
                    image: pokemonPokeAPIData.sprites.other["official-artwork"].front_default || "",
                    types: pokemonPokeAPIData.types.map((type) => ({ name: type.type.name })),
                    weight: pokemonPokeAPIData.weight.toString(),
                    height: pokemonPokeAPIData.height.toString(),
                    userId: 5,
                    baseExperience: pokemonPokeAPIData.base_experience || 0,
                    description: description || "",
                    color: color || "",
                };
            
                try {
                    await createPokemon(pokemonData);
                    console.log('Novo Pokemon criado');
                } catch (error) {
                    console.log('Erro ao criar o Pokemon:', error);
                }
            }
        }
      

    return (

        <>
            {isLoadingPokemon && (
                <IsLoadingModal />
            )}
            {pokemonPokeAPIData && (
                <>
                    <main>
                        <ContainerGlobal>
                            <HeaderMobile title="Pokemon" />
                            <div className="pokemonPage-image">
                                <img src={pokemonPokeAPIData.sprites.other["official-artwork"].front_default} alt="" />
                            </div>
                            <div className="pokemonPage-info">
                                <div className="pokemonPage-info_header">
                                    {isLoadingPokemon && (
                                        <span>
                                           <IsLoadingModal/>
                                        </span>
                                    )}
                                    <span className="pokemonPage-info_header tag-pokemon">
                                        {pokemonPokeAPIData?.types.slice(0, 3).map((type) => {
                                            return (
                                                <TagTypePokemon
                                                    name={type.type.name}
                                                    fontSize="0.9em"
                                                    padding="0.8em 1em"
                                                    margin='0em 0.5em 0em 0em'
                                                />
                                            )
                                        })}
                                    </span>
                                    {pokemonPokeAPIData && (
                                        <p className="pokemonPage-info_header id-pokemon">
                                            {pokemonPokeAPIData.id}
                                        </p>
                                    )}
                                </div>
                                <div className="pokemonPage-info_text">
                                    {isLoadingPokemon && (
                                        <span>
                                            <IsLoadingModal/>
                                        </span>
                                    )}
                                    {pokemonPokeAPIData && (
                                        <div key={pokemonPokeAPIData.name}>
                                            <h1>{pokemonPokeAPIData.name}</h1>
                                            <p>{description}</p>
                                        </div>
                                    )}
                                </div>
                                <div className="pokemonPage-info_observations">
                                    <h2>Caracteristicas</h2>
                                    <div className="pokemonPage-info_observations container-observations">
                                        <TabObservationPokemons
                                            type="Altura"
                                            value={pokemonPokeAPIData.height.toString()}
                                        />
                                        <TabObservationPokemons
                                            type="Peso"
                                            value={pokemonPokeAPIData.weight.toString()}
                                        />
                                        <TabObservationPokemons
                                            type="Nível experiência"
                                            value={pokemonPokeAPIData.base_experience.toString()}
                                        />
                                        <TabObservationPokemons
                                            type="Coloração"
                                            value={color}
                                        />
                                    </div>
                                </div>
                                <div className="pokemonPokeApi-addPokemon">
                                    <button type="submit" onClick={() => handleCreatePokemon(pokemonPokeAPIData)}>Capturar {pokemonPokeAPIData.name}</button>
                                </div>
                            </div>
                        </ContainerGlobal>
                    </main>
                </>
            )}
        </>
    );

}

export default PokemonPokeApi;