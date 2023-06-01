import CardCommentUser from "../../components/card-comment-user/cardCommentUser";
import TagTypePokemon from "../../components/tag-type-pokemon/tagTypePokemon";
import ReactLoading from "react-loading";
import { ContainerGlobal } from "../../styles/globalStyle";
import { createObservation, useObservationData } from "../../utils/useObservationPokemonData";
import { useCurrentPokemonData } from "../../services/getPokemonData";
import { useMutation, useQueryClient } from "react-query";
import { IObservationPokemonData } from "../../interfaces/IObservationPokemonData";
import "./pokemon.css";
import { getTypeByPokemonData } from "../../utils/useTypePokemonData";



interface ITabObservationPokemonProps {
  type: string;
  value: string;
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

const Pokemon = () => {
  const { pokemon, isLoadingPokemon } = useCurrentPokemonData();
  const { observationsPokemon } = useObservationData();
  const { typeByPokemonData, isLoadingByType, isErrorByType } = getTypeByPokemonData(pokemon?.name)

  const queryClient = useQueryClient();

  const mutation = useMutation(createObservation, {
    onSuccess: () => {
      queryClient.invalidateQueries("observations");
    },
  });

  const handleCreateObservation = (observationData: IObservationPokemonData) => {
    mutation.mutate(observationData);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const description = form.description.value;

    const observationData: IObservationPokemonData = {
      description: description,
      userId: pokemon?.userId,
      pokemonId: pokemon?.id,
    };

    handleCreateObservation(observationData);

    form.reset();
  };
  


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
      {pokemon && (
        <>
          <main>
            <ContainerGlobal>
              <div className="pokemonPage-image">
                <img src={pokemon.image} alt="" />
              </div>
              <div className="pokemonPage-info">
                <div className="pokemonPage-info_header">
                  <span className="pokemonPage-info_header tag-pokemon">
                    {typeByPokemonData?.map((type) => {
                      return(
                        <TagTypePokemon 
                          name={type.name} 
                          fontSize="0.9em"
                          padding="0.2em 0.5em"
                        />
                      )
                    })
                    }
                  </span>
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
                  {pokemon && (
                    <p className="pokemonPage-info_header id-pokemon">
                      {pokemon.id}
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
                  {pokemon && (
                    <div key={pokemon.name}>
                      <h1>{pokemon.name}</h1>
                      <p>{pokemon.description}</p>
                    </div>
                  )}
                </div>
                <div className="pokemonPage-info_observations">
                  <h2>Caracteristicas</h2>
                  <div className="pokemonPage-info_observations container-observations">
                    <TabObservationPokemons
                      type="Altura"
                      value={pokemon.height.toString()}
                    />
                    <TabObservationPokemons
                      type="Peso"
                      value={pokemon.weight.toString()}
                    />
                     <TabObservationPokemons
                      type="Nível experiência"
                      value={pokemon.baseExperience.toString()}
                    />
                    <TabObservationPokemons
                      type="Coloração"
                      value={pokemon.color}
                    />
                  </div>
                </div>
                <div className="pokemonPage-info_comments">
                  <h2>Comentários</h2>
                  <form onSubmit={handleFormSubmit} className="pokemonPage-info_comments formComments">
                    <textarea
                      name="description"
                      placeholder="Insira seu comentário..."
                      rows={4}
                    />
                    <button type="submit">Enviar</button>
                  </form>
                  <div className="pokemonPage-info_comments container-comments">
                    {observationsPokemon?.reverse().map((observation) => (
                      <CardCommentUser
                        key={observation.id}
                        description={observation.description}
                        userName={observation.userName}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </ContainerGlobal>
          </main>
        </>
      )}
    </>
  );
};

export default Pokemon;
