import ReactLoading from "react-loading";
import { ContainerGlobal } from "../../styles/globalStyle";
import { IPokemonData, createPokemonByPokeApi, useCurrentPokemonDataPokeApi } from "../../utils/usePokeApiData";
import { useMutation } from "react-query";
import TagTypePokemon from "../../components/tag-type-pokemon/tagTypePokemon";
import './pokemonPokeApi.css'

interface ITabObservationPokemonProps {
    type: string;
    value?: string;
}

const TabObservationPokemons: React.FC<ITabObservationPokemonProps> = ({ type,value }) => {

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

  
const Teste = () =>{

    // const { typeByPokemonData, isLoadingByType, isErrorByType } = getTypeByPokemonData()
    const { pokemonPokeApi, isLoadingPokemon, description, isLoadingDescription, color, isLoadingColor } = useCurrentPokemonDataPokeApi()
    
    const createPokemonMutation = useMutation(createPokemonByPokeApi);
    
    async function handleCreatePokemon(pokemonPokeApi: IPokemonData) {
        
        const types = pokemonPokeApi?.types.map((type) => ({ name: type.type.name }));

        if (pokemonPokeApi) {
      
          const pokemonData = {
            name: pokemonPokeApi.name,
            image: pokemonPokeApi.sprites.other["official-artwork"].front_default,
            types: types,
            weight: pokemonPokeApi.weight,
            height: pokemonPokeApi.height,
            userId: 5,
            baseExperience: pokemonPokeApi.base_experience,
            description: description,
            color: color
          };


          try {
            await createPokemonMutation.mutateAsync(pokemonData);
            console.log("Novo Pokemon criado");
          } catch (error) {
            console.log("Erro ao criar o Pokemon:", error);
          }
        }
    }

    return (
        
        <>
        {isLoadingPokemon && (
            <span>
            <ReactLoading
                type="bars"
                color="#DD655E"
                height={50}
                width={50}
            />
            </span>
        )}
        {pokemonPokeApi && (
            <>
            <main>
                <ContainerGlobal>
                <div className="pokemonPage-image">
                    <img src={pokemonPokeApi.sprites.other["official-artwork"].front_default} alt="" />
                </div>
                <div className="pokemonPage-info">
                    <div className="pokemonPage-info_header">
                    {isLoadingPokemon && (
                        <span>
                        <ReactLoading
                            type="spin"
                            color="#DD655E"
                            height={50}
                            width={50}
                        />
                        </span>
                    )}
                    <span className="pokemonPage-info_header tag-pokemon">
                        {pokemonPokeApi?.types.slice(0, 3).map((type) => {
                            return(
                                <TagTypePokemon 
                                    name={type.type.name} 
                                    fontSize="0.9em"
                                    padding="0.8em 1em"
                                />
                            )
                        })}
                    </span>
                    {pokemonPokeApi && (
                        <p className="pokemonPage-info_header id-pokemon">
                            {pokemonPokeApi.id}
                        </p>
                    )}
                    </div>
                    <div className="pokemonPage-info_text">
                    {isLoadingPokemon && (
                        <span>
                        <ReactLoading
                            type="bars"
                            color="#DD655E"
                            height={50}
                            width={50}
                        />
                        </span>
                    )}
                    {pokemonPokeApi && (
                        <div key={pokemonPokeApi.name}>
                            <h1>{pokemonPokeApi.name}</h1>
                            <p>{description}</p>
                        </div>
                    )}
                    </div>
                    <div className="pokemonPage-info_observations">
                        <h2>Caracteristicas</h2>
                        <div className="pokemonPage-info_observations container-observations">
                            <TabObservationPokemons
                            type="Altura"
                            value={pokemonPokeApi.height.toString()}
                            />
                            <TabObservationPokemons
                            type="Peso"
                            value={pokemonPokeApi.weight.toString()}
                            />
                            <TabObservationPokemons
                            type="Nível experiência"
                            value={pokemonPokeApi.base_experience.toString()}
                            />
                            <TabObservationPokemons
                                type="Coloração"
                                value={color}
                            />
                        </div>
                    </div>
                    <div className="pokemonPokeApi-addPokemon">
                        <button type="submit" onClick={()=> handleCreatePokemon(pokemonPokeApi)}>Capturar {pokemonPokeApi.name}</button>
                    </div>
                </div>
                </ContainerGlobal>
            </main>
            </>
        )}
        </>
    );
      
}

export default Teste;