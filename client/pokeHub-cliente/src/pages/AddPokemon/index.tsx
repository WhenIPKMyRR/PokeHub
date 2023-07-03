import { ContainerGlobal } from '../../styles/globalStyle';
import { useCurrentPokemonPokeApiData, usePokemonPokeApiData } from '../../services/PokeApiServices/usePokeApiData';
import { Link } from 'react-router-dom';
import TagTypePokemon from '../../components/TagTypePokemon/tagTypePokemon';
import { getColorByType } from '../../utils/getTypeColor';
import IsErrorModal from '../../components/ErrorModal';
import HeaderMobile from '../../components/HeaderMobile';
import IsLoadingModal from '../../components/LoadingModal';
import imageNull from '../../assets/images/image-null.png'
import './addPokemon.css';


interface ICardFavoritePokemonToCaught {
  pokemon: string;
}

const CardFavoritePokemonToCaught: React.FC<ICardFavoritePokemonToCaught> = ({ pokemon }) => {

  const { pokemonPokeAPIData, isLoadingPokemon, isErrorPokemon } = useCurrentPokemonPokeApiData(pokemon);


  const isSeen = localStorage.getItem(`seenPokemons`);

  const addPokemonToSeenList = (pokemonName: string) => {
    const seenList = JSON.parse(localStorage.getItem('seenPokemons') || '[]');
    seenList.push(pokemonName);
    localStorage.setItem('seenPokemons', JSON.stringify(seenList));
  };


  const color = pokemonPokeAPIData?.types.slice(0, 1).map((type) => getColorByType(type.type.name))[0];

  const background = {
    filter: 'brightness(58%)',
    backgroundColor: color,
  }


  if (isErrorPokemon) {
    return <IsErrorModal
      title='Algo deu errado'
      text="Erro ao carregar os pokemons"
      placeholder='Tentar novamente'
      image='https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png'
    />;
  }

  if (isLoadingPokemon) {
    return <IsLoadingModal />
  }



  return (
    <>
      <div className="cardPokemonCatch-container"
        style={
          pokemonPokeAPIData?.name && isSeen?.includes(pokemonPokeAPIData.name)
            ? background
            : { backgroundColor: color }
        }        
        onClick={() => pokemonPokeAPIData?.name && addPokemonToSeenList(pokemonPokeAPIData.name)}
      >
        <div className="cardPokemonCatch-header">
          <span className='cardPokemonCatch-header_types'>
            {pokemonPokeAPIData?.types?.slice(0, 1).map((type) => {
              return (
                <TagTypePokemon
                  name={type.type.name}
                  fontSize="0.75em"
                  padding="0.6em 0.4em"
                  margin='0em 0.4em 0em 0em'
                  key={type.type.name}
                />
              )
            })
            }
          </span>
        </div>
        <div className="cardPokemonCatch-image">
          <img src={pokemonPokeAPIData?.sprites.other['official-artwork'].front_default ? pokemonPokeAPIData?.sprites.other['official-artwork'].front_default : imageNull} alt={pokemonPokeAPIData?.name} />
        </div>
        <div className="cardPokemonCatch-text">
          <h1 className='cardPokemonCatch-text_name'>
            {pokemonPokeAPIData?.name}
          </h1>
        </div>
      </div>
    </>
  );
};

const AddPokemon = () => {

  const { data: pokemons, isLoading, isError } = usePokemonPokeApiData();

  return (
    <main>
      <ContainerGlobal>
        <HeaderMobile title='Capturar Pokemons' />
        <div className="addPokemon-container">
          {isError && <IsErrorModal
            title='Algo deu errado'
            text="Erro ao carregar os pokemons"
            placeholder='Tentar novamente'
            image='https://assets.pokemon.com/assets/cms2/img/pokedex/full/778.png'
          />}
          {isLoading && <IsLoadingModal />}
          {pokemons?.sort(() => Math.random() - 0.5).map(pokemon => (
            <Link to={`/pokemons/${pokemon.name}`} key={pokemon.name}>
              <CardFavoritePokemonToCaught pokemon={pokemon.name} />
            </Link>
          ))}
        </div>
      </ContainerGlobal>
    </main>
  );
};

export default AddPokemon;