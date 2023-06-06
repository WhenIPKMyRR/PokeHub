import CardCommentUser from "../../components/card-comment-user/cardCommentUser";
import TagTypePokemon from "../../components/tag-type-pokemon/tagTypePokemon";
import ReactLoading from "react-loading";
import { ContainerGlobal } from "../../styles/globalStyle";
import { createObservation} from "../../utils/useObservationPokemonData";
import { deleteCurrentPokemon, updateCurrentPokemon, useCurrentPokemonData } from "../../services/getPokemonData";
import { useMutation, useQueryClient } from "react-query";
import { IObservationPokemonData } from "../../interfaces/IObservationPokemonData";
import "./pokemon.css";
import DropdownExampleImage from "../../components/dropDownMenu/dropDownMenu";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";




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

  const params = useParams();
  const currentPokemon = params["*"] as string;

  const navigate = useNavigate();
  const { pokemon, isLoadingPokemon } = useCurrentPokemonData(currentPokemon);

  const queryClient = useQueryClient();

  const mutation = useMutation(createObservation, {
    onSuccess: () => {
      queryClient.invalidateQueries("observations");
    },
  });


  const [isFavorite, setIsFavorite] = useState(pokemon?.isFavorite);
  
  const handleToggleFavorite = async () => {
    const updatedData = {
      isFavorite: !isFavorite,
    };
  
    try {
      await updateCurrentPokemon(pokemon?.id, updatedData); 
      setIsFavorite(!isFavorite); 
      console.log("Pokémon atualizado com sucesso!");
    } catch (error) {
      console.log("Erro ao atualizar o Pokémon:", error);
    }
  };
  
  useEffect(() => {
    setIsFavorite(pokemon?.isFavorite); 
  }, [pokemon?.isFavorite]);
  
  

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
              <div className="pokemonPage-header">
                <button onClick={()=> navigate(-1)} className="pokemonPage-header_buttonBackPage">
                  <svg width={35} height={35} fill="none" stroke="#a3a3a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path d="m15 4-8 8 8 8" />
                  </svg>
                </button>
                <h1>Meus pokemons</h1>
                <DropdownExampleImage />
              </div>
              <div className="pokemonPage-image">
                <span className="pokemonPage-image_favPokemon">
                  <button onClick={() => { handleToggleFavorite() }} className='pokemonPage-image_favPokemon favoriteButtonHeart'>
                    {isFavorite ?
                    
                       (
                          <svg width={40} height={40} fill="#d93f3f" viewBox="0 0 24 24" stroke="#a3a3a3" strokeWidth={1.6}>
                          <path d="M12 21a1.5 1.5 0 0 1-.843-.261c-3.684-2.5-5.28-4.216-6.16-5.288-1.874-2.285-2.772-4.63-2.746-7.171C2.28 5.368 4.616 3 7.457 3c2.067 0 3.498 1.164 4.331 2.133a.281.281 0 0 0 .425 0C13.046 4.163 14.477 3 16.543 3c2.842 0 5.178 2.368 5.207 5.28.026 2.541-.873 4.887-2.747 7.172-.88 1.072-2.475 2.787-6.159 5.287a1.5 1.5 0 0 1-.843.261Z" />
                          </svg>
                      ) : (
                          <svg width={40} height={40} fill="none" stroke="#a3a3a3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} viewBox="0 0 24 24">
                              <path d="M16.544 3.75c-3.043 0-4.543 3-4.543 3s-1.5-3-4.544-3C4.984 3.75 3.026 5.82 3 8.288c-.051 5.125 4.066 8.77 8.579 11.832a.75.75 0 0 0 .843 0c4.512-3.063 8.63-6.707 8.578-11.832-.025-2.469-1.983-4.538-4.456-4.538Z" />
                          </svg>
                      )
                    }
                  </button>
                </span>
                <img src={pokemon.image} alt="" />
              </div>
              <div className="pokemonPage-info">
                <div className="pokemonPage-info_header">
                  <span className="pokemonPage-info_header tag-pokemon">
                    {pokemon.types.map(type =>{
                      return(
                        <TagTypePokemon
                          key={type.id}
                          name={type.name}
                          fontSize="1em"
                          padding="0.7em 0.5em"
                          margin="0em 0.4em 0em 0em"
                        />
                      )
                    })}
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
                      key={pokemon.id}
                      type="Altura"
                      value={pokemon.height.toString()}
                    />
                    <TabObservationPokemons
                      key={pokemon.id}
                      type="Peso"
                      value={pokemon.weight.toString()}
                    />
                     <TabObservationPokemons
                      key={pokemon.id}
                      type="Nível experiência"
                      value={pokemon.baseExperience.toString()}
                    />
                    <TabObservationPokemons
                      key={pokemon.id}
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
                    {pokemon?.observations.reverse().map((observation) => {
                      return (
                        <CardCommentUser
                          key={observation.id}
                          description={observation.description}
                          firstUserName={observation.user.firstName}
                          lastUserName={observation.user.lastName}
                          avatarUser={observation.user.avatar}
                        />
                      );
                    })}
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
