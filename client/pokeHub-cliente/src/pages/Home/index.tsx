import CardLastAddPokemon from '../../components/CardLastAddPokemon';
import CardNewPokemon from '../../components/CardNewPokemon';
import Carousel from '../../components/GenericCarousel';
import CategoryHome from '../../components/CategoriesPokemonHome';
import { ContainerGlobal } from '../../styles/globalStyle';
import imageCategoryFantasma from '../../assets/images/fantasma-image-category-pokemon.png'
import imageCategoryFogo from '../../assets/images/fogo-image-category-pokemon.png'
import imageCategoryAgua from '../../assets/images/agua-image-category-pokemon.png'
import imageCategoryPsiquico from '../../assets/images/psiquico-image-category-pokemon.png'
import imageCategoryNormal from '../../assets/images/normal-image-category-pokemon.png'
import imageCategoryGrama from '../../assets/images/grama-image-category-pokemon.png'
import imageCategoryEletrico from '../../assets/images/eletrico-image-category-pokemon.png'
import ButtonAddPokemon from '../../components/GenericButton';
import CardFavoritePokemonHome from '../../components/CardFavoriteHomePokemon';
import { Link } from 'react-router-dom';
import { useAllPokemons } from '../../services/PokeApiServices/usePokeApiData';
import { usePokemonData } from '../../utils/usePokemonData';
import IsErrorModal from '../../components/ErrorModal';
import IsLoadingModal from '../../components/LoadingModal';
import './home.css';



export default function Home() {

   const { data: pokemons, isLoading, isError } = useAllPokemons();
   const { pokemonsPokeHub, isLoadingPokeHub } = usePokemonData()

   const isSeen = localStorage.getItem(`seenPokemons`);

   return (
      <main className='home'>
         <ContainerGlobal>
            <section className='new_Pokemon'>
               <h1 className='new_Pokemon title'>
                  Ultimos vistos
               </h1>
               {isError && <IsErrorModal />}
               {isLoading && <IsLoadingModal />}
               <Carousel settingsResponsive={{
                  0: { items: 2.5 },
                  1024: { items: 8 }
               }}>
                  {pokemons?.filter(pokemon => isSeen?.includes(pokemon.name))
                     .sort((a, b) => {
                        const aIndex = isSeen?.indexOf(a.name);
                        const bIndex = isSeen?.indexOf(b.name);

                        if (aIndex === undefined || bIndex === undefined) {
                           return 0;
                        }

                        return aIndex - bIndex;
                     })
                     .reverse().map(pokemon => (
                        <Link to={`/pokemon/${pokemon.name}`} key={pokemon.name}>
                           <CardNewPokemon pokemon={pokemon} />
                        </Link>
                     ))}

               </Carousel>
            </section>
            <section className='category_Pokemon'>
               <Carousel settingsResponsive={{
                  0: { items: 4 },
                  1024: { items: 10 }
               }}>
                  <CategoryHome image={imageCategoryFogo} name='Fogo' rota='/search/type/fire' borderColor='#FF5733' />
                  <CategoryHome image={imageCategoryGrama} name='Grama' rota='/search/type/grass' borderColor='#66bb6a' />
                  <CategoryHome image={imageCategoryAgua} name='Água' rota='/search/type/water' borderColor='#2E86C1' />
                  <CategoryHome image={imageCategoryEletrico} name='Elétrico' rota='/search/type/eletric' borderColor='#FFC300' />
                  <CategoryHome image={imageCategoryFantasma} name='Fantasma' rota='/search/type/ghost' borderColor='#705898' />
                  <CategoryHome image={imageCategoryNormal} name='Normal' rota='/search/type/normal' borderColor='#B8B8B8' />
                  <CategoryHome image={imageCategoryPsiquico} name='Psiquico' rota='/search/type/psychic' borderColor='#f1948acf' />
                  <span style={{
                     display: 'flex',
                     flexDirection: 'column',
                     justifyContent: 'center',
                     alignItems: 'center',
                     width: '90%',
                     height: '100%',
                     padding: '0.5em 0em'
                  }}>
                     <ButtonAddPokemon route={'/search'} svgIcon={
                        <svg width="40" height="40" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                           <path d="m8 4 8 8-8 8"></path>
                        </svg>
                     } />
                     <p style={{
                        fontSize: '0.90em',
                        fontWeight: '500',
                        marginTop: '0.8em'
                     }}>
                        Ver mais
                     </p>
                  </span>
               </Carousel>
            </section>
            <section className='last-add_Pokemon'>
               <h1 className='last-add_Pokemon title'>
                  Ultimos adicionados
               </h1>
               {/* {isErrorPokeHub && <h1>Erro ao carregar os pokemons</h1>} */}
               {isLoadingPokeHub && <IsLoadingModal />}
               {(pokemonsPokeHub ? pokemonsPokeHub.slice(-4).reverse().map(pokemonPokeHub => (
                  <CardLastAddPokemon key={pokemonPokeHub.id} image={pokemonPokeHub.image} name={pokemonPokeHub.name} description={pokemonPokeHub.description} rota={pokemonPokeHub.name} />
               )) : null
               )}
               <span className='last-add_Pokemon linkTo'>
                  <Link to={'/caughts'}>
                     <p>
                        Ver mais
                     </p>
                  </Link>
               </span>
            </section>
            <section className='favorites_Pokemon'>
               <h1 className='favorites_Pokemon title'>
                  Seus favoritos
               </h1>
               {/* {isErrorPokeHub && <h1>Erro ao carregar os pokemons</h1>} */}
               {isLoadingPokeHub && <IsLoadingModal />}
               {pokemonsPokeHub?.filter(
                  (pokemon) => pokemon.isFavorite === true).slice(-4).reverse().map(
                     (pokemon) => (
                        <CardFavoritePokemonHome key={pokemon.id} image={pokemon.image} name={pokemon.name} description={pokemon.description} rota={pokemon.name} />
                     )
                  )
               }
               <span className='favorites-Pokemon_linkTo' >
                  <Link to={'/favorites'}>
                     <p>
                        Ver mais
                     </p>
                  </Link>
               </span>
            </section>
         </ContainerGlobal>
         <span className='add-Pokemon'>
            <ButtonAddPokemon route={'/add'} svgIcon={
               <svg width="40" height="40" fill="none" stroke="#f5f5f5" stroke-linecap="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12H4"></path>
                  <path d="M12 20V4"></path>
               </svg>
            } />
         </span>
      </main>
   )
}