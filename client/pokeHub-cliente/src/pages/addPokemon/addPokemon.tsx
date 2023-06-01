import ReactLoading from 'react-loading';
import { ContainerGlobal } from '../../styles/globalStyle';
import { IPokemonToCaught, useAllPokemons, usePokemon } from '../../utils/usePokeApiData';
import { Link } from 'react-router-dom';
import TagTypePokemon from '../../components/tag-type-pokemon/tagTypePokemon';
import './addPokemon.css';
import { getTypeByPokemonData } from '../../utils/useTypePokemonData';


interface IFavoritePokemonData {
  pokemon: IPokemonToCaught;
}

const CardFavoritePokemonToCaught: React.FC<IFavoritePokemonData> = ({ pokemon }) => {
  const { data: pokemonTo, isLoading, isError } = usePokemon(pokemon);
  const { typeByPokemonData, isLoadingByType, isErrorByType } = getTypeByPokemonData(pokemon?.name)

  if (isLoading) {
    return <ReactLoading 
      type="spin"
      color="#DD655E"
    />;
  }

  if (isError) {
    return <h1>Erro ao carregar os pokemons</h1>;
  }

  return (
    <>
      <div className="cardFavoritePokemon-container" style={{ backgroundColor: "#c1c158" }}>
        <div className="cardFavoritePokemon-header">
          <span>
            {pokemonTo?.types?.slice(0,2).map((type) => {
              return(
                <TagTypePokemon 
                  name={type.type.name} 
                  fontSize="0.9em"
                  padding="0.2em 0.5em"
                  color={"#A8D8EA"}
                />
              )})
            }
          </span>
          <p className='cardFavoritePokemon-header_id'>
            {pokemonTo?.id}
          </p>
        </div>
        <div className="cardFavoritePokemon-image">
          <img src={pokemonTo?.sprites.other['official-artwork'].front_default} alt="{pokemonTo?.name}" />
        </div>
        <div className="cardFavoritePokemon-text">
          <h1 className='cardFavoritePokemon-text_name'>
            {pokemonTo?.name}
          </h1>
        </div>
      </div>
    </>
  );
};

const AddPokemon = () => {
  const { data: pokemons, isLoading, isError } = useAllPokemons();


  return (
    <main>
      <ContainerGlobal>
        <h1 className="addPokemon-tit">
          Capturar Pokemons
        </h1>
        <div className="addPokemon-container">
          {isError && <h1>Erro ao carregar os pokemons</h1>}
          {isLoading && <ReactLoading
            type="spin"
            color="#DD655E"
           />}
          {pokemons?.map(pokemon => (
            <Link to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
              <CardFavoritePokemonToCaught pokemon={pokemon} />

            </Link>
          ))}
        </div>
      </ContainerGlobal>
    </main>
  );
};

export default AddPokemon;