import ReactLoading from 'react-loading';
import { ContainerGlobal } from '../../styles/globalStyle';
import { IPokemonToCaught, useAllPokemons, usePokemon } from '../../utils/usePokeApiData';
import { Link } from 'react-router-dom';
import TagTypePokemon from '../../components/tag-type-pokemon/tagTypePokemon';
import './addPokemon.css';
import { getColorByType } from '../../services/getTypeColor';


interface IFavoritePokemonData {
  pokemon: IPokemonToCaught;
}

const CardFavoritePokemonToCaught: React.FC<IFavoritePokemonData> = ({ pokemon }) => {

  const { data: pokemonTo, isLoading, isError } = usePokemon(pokemon);
  const color = pokemonTo?.types.slice(0,1).map((type) => getColorByType(type.type.name))[0];

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
      <div className="cardPokemonCatch-container"
        style={{backgroundColor: color}}
      >
        <div className="cardPokemonCatch-header">
          <span className='cardPokemonCatch-header_types'>
            {pokemonTo?.types?.slice(0,1).map((type) => {
              return(
                <TagTypePokemon 
                  name={type.type.name} 
                  fontSize="0.8em"
                  padding="0.7em 0.4em"
                />
              )})
            }
          </span>
          <p className='cardPokemonCatch-header_id'>
            {pokemonTo?.id}
          </p>
        </div>
        <div className="cardPokemonCatch-image">
          <img src={pokemonTo?.sprites.other['official-artwork'].front_default} alt="{pokemonTo?.name}" />
        </div>
        <div className="cardPokemonCatch-text">
          <h1 className='cardPokemonCatch-text_name'>
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
        <h1 className="addPokemon-tittle">
          Capturar Pokemons
        </h1>
        <div className="addPokemon-container">
          {isError && <h1>Erro ao carregar os pokemons</h1>}
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